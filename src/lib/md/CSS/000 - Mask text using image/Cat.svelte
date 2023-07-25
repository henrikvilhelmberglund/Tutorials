<script>
	let text = Array.from({ length: 3000 }).map((a) => {
		return "@";
	});
</script>

<div
	class="flex max-w-[600px] break-all bg-[url('manja-vitolic-gKXKBY-C-Dk-unsplash.jpg')] bg-clip-text text-[0.7rem] leading-3 tracking-[-5px] text-transparent">
	<span class="m-0 p-0">{text.join("")}</span>
</div>

<style>
	/* Vanilla CSS: */
	/* 
  div {
	background-image: url("manja-vitolic-gKXKBY-C-Dk-unsplash.jpg");
	background-clip: text;
	-webkit-background-clip: text;
	color: transparent;
	font-size: 0.7rem;
	} 
  */
</style>
