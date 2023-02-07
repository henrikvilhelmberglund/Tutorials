<script>
	let selectedBreed;
	const breeds = ["affenpinscher", "african", "airedale"];

	let imgSrc;
	let hasError = false;

	$: fetchDogImage(selectedBreed);

	function fetchDogImage(breed) {
		hasError = false;
		imgSrc = null;
		fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
			.then((response) => response.json())
			.then((obj) => (imgSrc = obj.message))
			.catch((error) => (hasError = true));
	}
</script>

<select name="" bind:value={selectedBreed} id="">
	{#each breeds as breed}
		<option value={breed}>{breed}</option>
	{/each}
</select>

Selected breed: {selectedBreed}

<hr w-full />

{#if hasError}
	<p>oops! error!</p>
{:else}
	<img src={imgSrc} alt="dog" />
{/if}
