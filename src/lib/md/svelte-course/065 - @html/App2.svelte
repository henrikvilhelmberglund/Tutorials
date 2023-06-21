<script>
	let html = `<b>this is bold text</b><button onClick="(function(){
    alert('You have been hacked!');
    return false;
})();return false;">Click me</button>`;
</script>

<textarea bind:value={html} cols="30" rows="10" />

<div>{@html html}</div>

<style>
</style>
