<template>
    <main id="main-content" class="main-content">
			<LeftSidebar />
			<Content />
    </main>
</template>
<script>
import LeftSidebar from './LeftSidebar.vue'
import Content from './Content.vue'

export default {
	components: {
		LeftSidebar, 
		Content
	}
}
</script>