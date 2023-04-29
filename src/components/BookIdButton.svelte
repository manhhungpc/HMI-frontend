<div class="list-button">
	<div class="title">You can't see me!</div>
	<button class="button">
		<i class="fa-solid fa-volume-high fa-3x" />
	</button>
	<button class="button">
		<i class="fa-regular fa-bookmark fa-3x" />
	</button>
	<button class="button">
		<i class="fa-regular fa-circle-stop fa-3x" />
	</button>
</div>

<style lang="scss">
	.list-button {
		width: 120px;
		height: 100%;
		display: flex;
		align-items: center;
		flex-direction: column;
		overflow-y: auto;
		overflow-x: hidden;
		margin-top: 20px;
		padding-left: 0px;
	}

	.title {
		padding: 0 0 20px;
		font-weight: 500;
		font-size: 15px;
	}

	.button {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 80%;
		min-height: 30px;
		// border: 1px solid red;
		background-color: #fff;
		color: #000;
		border-radius: 10px;
		padding: 10px 0;
		margin: 20px 0;
	}

	// @media (max-width: 1045px) {
	// 	.list-button {
	// 		display: none;
	// 	}
	// }
</style>
