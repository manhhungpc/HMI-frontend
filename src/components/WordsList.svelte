<script lang="ts">
	import 'src/styles/WordsList.css';

	const token = localStorage.getItem('token') || '';
	let err = '',
		randomPercent: string;
	export let params: string;

	async function getUserNote() {
		const res = await fetch(`/user/${params}/words-note`, {
			method: 'GET',
			// body: JSON.stringify({ userId: params }),
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
			<p>List words note</p>
			<p class="time">December, 12</p>
		</div>
		<div class="projects-section-line">
			<div class="projects-status">
				<div class="item-status">
					<span class="status-number">45</span>
					<span class="status-type">In Progress</span>
				</div>
				<div class="item-status">
					<span class="status-number">62</span>
					<span class="status-type">Total Projects</span>
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
			{#await getUserNote()}
				<p>Loading ...</p>
			{:then notes}
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
									<button class="add-participant" style="color: #ff942e;">
										<i class="fa-solid fa-volume-high" />
									</button>
								</div>
							</div>
						</div>
					</div>
				{/each}
			{/await}
		</div>
	</div>
</div>
