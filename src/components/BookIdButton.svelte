<div class="list-button">
	<div class="title">You can't see me!</div>
	<div class="button">
		<i class="fa-solid fa-volume-high fa-2xl" />
	</div>
	<div class="button">
		<i class="fa-regular fa-bookmark fa-2xl" />
	</div>
	<div class="button">
		<i class="fa-regular fa-circle-stop fa-2xl" />
	</div>
</div>

<style lang="scss">
	.list-button {
		width: 120px;
		display: flex;
		flex-direction: column;
		overflow-y: auto;
		overflow-x: hidden;
		flex-shrink: 0;
		margin-top: 20px;
		padding: 0 30px;
	}

	.title {
		padding: 0 0 20px;
		font-weight: 500;
		font-size: 15px;
	}

	.button i {
		display: flex;
		align-items: center;
		width: 45px;
		margin-right: 16px;
		margin-top: 30px;
	}

	.button {
		display: flex;
		align-items: center;
		& + & {
			margin-top: 20px;
		}
	}

	@media (max-width: 1045px) {
		.list-button {
			display: none;
		}
	}
</style>
