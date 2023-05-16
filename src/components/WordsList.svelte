<script lang="ts">
	import 'src/styles/WordsList.css';

	const token = localStorage.getItem('token') || '';
	let err = '',
		randomPercent: string;
	export let params: string;

	async function getUserNote() {
		const res = await fetch(`/user/${params}/words-note`, {
			method: 'GET',
			headers: {
				'content-type': 'application/json',
				Authorization: token as string,
			},
		});

		const response = await res.json();
		if (response.status !== 200) {
			err = response.err;
		}
		console.log(response.data);

		return response.data;
	}

	async function deleteNote(id: string) {
		const res = await fetch(`/words/${id}`, {
			method: 'DELETE',
			headers: {
				'content-type': 'application/json',
				Authorization: token as string,
			},
		});

		const response = await res.json();
		if (response.status !== 200) {
			err = response.err;
			return;
		}
		window.location.href = `/user/${params}/words-note`;
		console.log(response.data);

		return response.data;
	}

	async function streamAudio(body: string) {
		const res = await fetch(`/tts?q=${body}`, {
			method: 'GET',
			headers: {
				'content-type': 'form-encoded',
				Authorization: token,
			},
		});
		const response = await res.json();
		let audio: HTMLAudioElement;
		audio = new Audio(response);
		audio.play();
		audio.playbackRate = 0.8;
		return response;
	}
</script>

<div class="app-content">
	<div class="app-sidebar">
		<!-- <a href="" class="app-sidebar-link  active">
			<i class="fa-solid fa-gear" />
		</a>
		<a href="" class="app-sidebar-link">
			<i class="fa-solid fa-gear" />
		</a>
		<a href="" class="app-sidebar-link">
			<i class="fa-solid fa-gear" />
		</a> -->
	</div>
	<div class="projects-section">
		<div class="projects-section-header">
			<p>Danh sách các từ đã lưu</p>
			<!-- <p class="time">December, 12</p> -->
		</div>
		{#await getUserNote()}
			<h1 class="text-4xl flex items-center justify-center h-40">Loading ...</h1>
		{:then notes}
			<div class="projects-section-line">
				<div class="projects-status">
					<div class="item-status">
						<span class="status-number">{notes.length}</span>
						<span class="status-type">Tổng số từ đã lưu</span>
					</div>
				</div>
				<div class="view-actions">
					<!-- <button class="view-btn list-view" title="List View">
					<i class="fa-solid fa-list" />
				</button>
				<button class="view-btn grid-view active" title="Grid View">
					<i class="fa-solid fa-table-cells-large" />
				</button> -->
				</div>
			</div>
			<div class="project-boxes jsGridView">
				{#each notes as note}
					<div class="project-box-wrapper">
						<div class="project-box" style="background-color: #fee4cb;">
							<div class="project-box-header">
								<span>{new Date(Number(note.date)).toLocaleString('en-IE')}</span>
								<div class="more-wrapper">
									<button class="project-btn-more">
										<i class="fa-solid fa-ellipsis-vertical" />
									</button>
								</div>
							</div>
							<div class="project-box-content-header">
								<p class="box-content-header">{note.word.toUpperCase()}</p>
								<!-- <p class="box-content-subheader">Nghĩa của từ</p> -->
							</div>
							<div class="box-progress-wrapper" style="margin-bottom: 5px;">
								<span class="box-progress-header">Ghi chú:</span>
								<span style="font-weight: normal;">
									{note.note ? note.note : 'Không có ghi chú'}
								</span>
							</div>
							<div class="box-progress-wrapper">
								<p class="box-progress-header">So sánh</p>
								<div class="box-progress-bar">
									<span
										class="box-progress"
										style="width: {randomPercent}%; background-color: #ff942e"
									/>
								</div>
								<p class="box-progress-percentage">
									{(randomPercent = Number(Math.random() * (100 - 50) + 50).toFixed(0))}
									%
								</p>
							</div>
							<div class="project-box-footer">
								<div class="participants">
									<button
										class="add-participant"
										style="color: #ff942e;"
										on:click={() => streamAudio(note.word)}
									>
										<i class="fa-solid fa-volume-high" />
									</button>
									<button
										class="add-participant"
										style="color: #ff942e;"
										on:click={() => deleteNote(note._id)}
									>
										<i class="fa-solid fa-trash" />
									</button>
								</div>
							</div>
						</div>
					</div>
				{/each}
			</div>
		{/await}
	</div>
</div>
