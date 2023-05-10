<script>
	import 'src/styles/WordsList.css';
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
			<div class="project-box-wrapper">
				<div class="project-box" style="background-color: #fee4cb;">
					<div class="project-box-header">
						<span>December 10, 2020</span>
						<div class="more-wrapper">
							<button class="project-btn-more">
								<i class="fa-solid fa-ellipsis-vertical" />
							</button>
						</div>
					</div>
					<div class="project-box-content-header">
						<p class="box-content-header">Từ</p>
						<p class="box-content-subheader">Nghĩa của từ</p>
					</div>
					<div class="box-progress-wrapper">
						<p class="box-progress-header">So sánh</p>
						<div class="box-progress-bar">
							<span class="box-progress" style="width: 60%; background-color: #ff942e" />
						</div>
						<p class="box-progress-percentage">60%</p>
					</div>
					<div class="project-box-footer">
						<div class="participants">
							<button class="add-participant" style="color: #ff942e;">
								<i class="fa-solid fa-volume-high" />
							</button>
						</div>
						<div class="days-left" style="color: #ff942e;">2 Days Left</div>
					</div>
				</div>
			</div>
			<div class="project-box-wrapper">
				<div class="project-box" style="background-color: #e9e7fd;">
					<div class="project-box-header">
						<span>December 10, 2020</span>
						<div class="more-wrapper">
							<button class="project-btn-more">
								<i class="fa-solid fa-ellipsis-vertical" />
							</button>
						</div>
					</div>
					<div class="project-box-content-header">
						<p class="box-content-header">Testing</p>
						<p class="box-content-subheader">Prototyping</p>
					</div>
					<div class="box-progress-wrapper">
						<p class="box-progress-header">Progress</p>
						<div class="box-progress-bar">
							<span class="box-progress" style="width: 50%; background-color: #4f3ff0" />
						</div>
						<p class="box-progress-percentage">50%</p>
					</div>
					<div class="project-box-footer">
						<div class="participants">
							<button class="add-participant" style="color: #4f3ff0;">
								<i class="fa-solid fa-volume-high" />
							</button>
						</div>
						<div class="days-left" style="color: #4f3ff0;">2 Days Left</div>
					</div>
				</div>
			</div>
			<div class="project-box-wrapper">
				<div class="project-box">
					<div class="project-box-header">
						<span>December 10, 2020</span>
						<div class="more-wrapper">
							<button class="project-btn-more">
								<i class="fa-solid fa-ellipsis-vertical" />
							</button>
						</div>
					</div>
					<div class="project-box-content-header">
						<p class="box-content-header">Svg Animations</p>
						<p class="box-content-subheader">Prototyping</p>
					</div>
					<div class="box-progress-wrapper">
						<p class="box-progress-header">Progress</p>
						<div class="box-progress-bar">
							<span class="box-progress" style="width: 80%; background-color: #096c86" />
						</div>
						<p class="box-progress-percentage">80%</p>
					</div>
					<div class="project-box-footer">
						<div class="participants">
							<button class="add-participant" style="color: #096c86;">
								<i class="fa-solid fa-volume-high" />
							</button>
						</div>
						<div class="days-left" style="color: #096c86;">2 Days Left</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
