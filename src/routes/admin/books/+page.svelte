<script lang="ts">
	import 'src/styles/adminForm.css';
	import { convertToBase64 } from 'src/utils/base64';
	import { getToken } from 'src/utils/token';
	import { toasts, ToastContainer, FlatToast } from 'svelte-toasts';
	//@ts-ignore
	import MultiSelect from 'svelte-multiselect';

	let selected: string[] = [],
		err = '';
	let title: string = '',
		content: string = '',
		authors: string[] = [],
		images: string[] = [],
		intro: string = '';
	let allBooks: any = [],
		selectedBook: any;
	const token = getToken();

	enum Mode {
		add = 1,
		edit = 2,
		delete = 3,
	}
	let mode = Mode.add;

	function displayBookData(id: string) {
		const book = allBooks.find((currBook: any) => currBook._id === id);
		title = book.title;
		content = book.content;
		authors = book.authors.reduce((joinAuthor: string, a: any) => {
			return a.alias + ', ' + joinAuthor;
		}, '');
		images = book.images;
		intro = book.intro ? book.intro : '';
	}

	function uploadImage(e: any) {
		convertToBase64(e, (response: string) => {
			images = [...images, response];
			// console.log(images);
		});
	}

	async function getAllBooks() {
		const res = await fetch('/books', {
			method: 'GET',
			headers: {
				'content-type': 'form-encoded',
				Authorization: token,
			},
		});
		const { data } = await res.json();
		allBooks = data;
		return data;
	}

	async function getAuthors() {
		const res = await fetch('/authors', {
			method: 'GET',
			headers: {
				'content-type': 'form-encoded',
				Authorization: token,
			},
		});
		const { data } = await res.json();
		const authorOptions = data.map((author: any) => {
			const option = (author.name ? author.name : 'Name not found') + ` (${author.alias})`;
			return option;
		});

		return authorOptions;
	}

	$: authors = selected;
	const onCreateBooks = async () => {
		let format_authors: any[] = [];
		authors.map((author) => {
			const alias = new RegExp(/\(([^)]+)\)/).exec(author)?.[1];
			if (alias === undefined) {
				err = 'Format tác giả không hợp lệ';
				return;
			}
			format_authors.push({
				name: author.split('(')[0].trim(),
				alias: new RegExp(/\(([^)]+)\)/).exec(author)?.[1],
			});
		});

		const newBook = {
			title,
			content,
			authors: format_authors,
			images,
			intro,
		};
		const res = await fetch('/books', {
			method: 'POST',
			body: JSON.stringify(newBook),
			headers: {
				'content-type': 'form-encoded',
				Authorization: token,
			},
		});
		const response = await res.json();
		console.log(response);
		if (response.status !== 200) {
			toasts.add({
				title: 'Thất bại! Thử tải lại',
				description: '',
				duration: 4000, // 0 or negative to avoid auto-remove
				showProgress: true,
				placement: 'top-right',
				type: 'error',
				theme: 'dark',
			});
			return;
		}

		toasts.add({
			title: 'Thành công',
			description: '',
			duration: 4000, // 0 or negative to avoid auto-remove
			showProgress: true,
			placement: 'top-right',
			type: 'success',
			theme: 'dark',
		});
	};
	const onUpdateBook = async (id: string) => {
		const updateData = {
			title,
			content,
			images,
			intro,
		};
		console.log(id);
		const res = await fetch(`/admin/books/${id}`, {
			method: 'PUT',
			body: JSON.stringify(updateData),
			headers: {
				'content-type': 'form-encoded',
				Authorization: token,
			},
		});
		const response = await res.json();
		console.log(response);
		if (response.status !== 200) {
			toasts.add({
				title: 'Thất bại! Thử tải lại',
				description: '',
				duration: 4000, // 0 or negative to avoid auto-remove
				showProgress: true,
				placement: 'top-right',
				type: 'error',
				theme: 'dark',
			});
			return;
		}

		toasts.add({
			title: 'Thành công',
			description: '',
			duration: 4000, // 0 or negative to avoid auto-remove
			showProgress: true,
			placement: 'top-right',
			type: 'success',
			theme: 'dark',
		});
		return response;
	};

	const onDeleteBook = async (id: string) => {
		const res = await fetch(`/admin/books/${id}`, {
			method: 'DELETE',
			headers: {
				'content-type': 'form-encoded',
				Authorization: token,
			},
		});
		const response = await res.json();
		console.log(response);
		if (response.status !== 200) {
			toasts.add({
				title: 'Thất bại! Thử tải lại',
				description: '',
				duration: 4000, // 0 or negative to avoid auto-remove
				showProgress: true,
				placement: 'top-right',
				type: 'error',
				theme: 'dark',
			});
			return;
		}

		toasts.add({
			title: 'Thành công',
			description: '',
			duration: 4000, // 0 or negative to avoid auto-remove
			showProgress: true,
			placement: 'top-right',
			type: 'success',
			theme: 'dark',
		});
		return response;
	};
</script>

<nav class="navigation">
	<ul class="main">
		<li class="update">
			<button class="btn-nav" on:click={() => (mode = Mode.add)}>
				<i class="fa-solid fa-file-circle-plus" /> Thêm sách
			</button>
		</li>
		<li class="update">
			<button class="btn-nav" on:click={() => (mode = Mode.edit)}>
				<i class="fa-solid fa-pen-to-square" /> Cập nhật thông tin sách
			</button>
		</li>
		<li class="delete">
			<button class="btn-nav" on:click={() => (mode = Mode.delete)}>
				<i class="fa-solid fa-trash-can" /> Xóa sách
			</button>
		</li>
	</ul>
</nav>
<main>
	<section class="panel important">
		<h2>
			{mode === Mode.add
				? 'Thêm sách'
				: mode === Mode.edit
				? 'Cập nhật thông tin sách'
				: 'Xóa sách'}
		</h2>
		{#if err}
			<h2>Lỗi: {err}</h2>
		{/if}
		<ToastContainer placement="top-right" let:data>
			<FlatToast {data} />
		</ToastContainer>
		<form class="wrap-form">
			<div class="twothirds">
				{#if mode === Mode.edit || mode === Mode.delete}
					{#await getAllBooks()}
						<h1 class="text-4xl flex items-center justify-center h-40">Đang lấy data sách ...</h1>
					{:then books}
						<div>
							Chọn sách để {mode === Mode.edit ? 'cập nhật' : 'xóa'}
							<select
								class="form-select"
								bind:value={selectedBook}
								on:change={() => displayBookData(selectedBook)}
							>
								{#each books as book}
									<option value={book._id}> {book.title} </option>
								{/each}
							</select>
						</div>
					{/await}
				{/if}
				<div>
					Tên cuốn truyện:<br />
					<input type="text" size="40" bind:value={title} /><br />
				</div>
				{#if mode === Mode.add}
					Tác giả:
					{#await getAuthors()}
						<p>Loading authors ...</p>
					{:then authors}
						<MultiSelect
							options={authors}
							bind:selected
							allowUserOptions="append"
							createOptionMsg="Tạo tác giả mới theo format: Tên (bút danh*)"
						/>
					{/await}
				{:else}
					<div>
						Tác giả:<br />
						<input type="text" size="40" bind:value={authors} /><br />
					</div>
				{/if}
				<div class="mt-8">
					Tóm tắt:<br />
					<textarea rows="5" cols="67" bind:value={intro} /><br />
				</div>
				<div>
					Nội dung:<br />
					<textarea rows="15" cols="67" bind:value={content} /><br />
				</div>
				<div>
					Ảnh bìa:<br />
					<input type="file" size="40" accept="image/*" on:change={uploadImage} /><br />
					{#if images.length > 0}
						<div class="images-upload">
							{#each images as bas64Img}
								<img src={bas64Img} alt="Ảnh bìa" width="200" class="image" />
							{/each}
						</div>
					{/if}
				</div>
				{#if mode === Mode.add}
					<button type="button" class="save-btn" on:click={onCreateBooks}>Add</button>
				{:else if mode === Mode.edit}
					<button type="button" class="save-btn" on:click={() => onUpdateBook(selectedBook)}
						>Save</button
					>
				{:else}
					<button type="button" class="delete-btn" on:click={() => onDeleteBook(selectedBook)}
						>Delete</button
					>
				{/if}
			</div>
		</form>
	</section>
</main>
