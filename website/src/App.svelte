<script lang=ts>
	import { Container, Row, Col } from "sveltestrap";

	let user = true;
</script>

{#if user}
<!-- logged in -->
<Container>
	<Row>

	</Row>
	<Row>
		
	</Row>
</Container>
{:else}
<!-- not logged in -->
{/if}

<style lang=scss>

</style>