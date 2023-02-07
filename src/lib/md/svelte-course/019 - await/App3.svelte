<script>
	let selectedBreed;
	const breeds = ["affenpinscher", "african", "airedale"];

	let imgSrc;
	let isFetching = false;
	let hasError = false;

	$: fetchDogImage(selectedBreed);

	async function fetchDogImage(breed) {
		try {
			isFetching = true;
			hasError = false;
			imgSrc = null;
			const response = await fetch(`https://dog.ceo/api/breed/${breed}/images/random`);
			const obj = await response.json();
			imgSrc = obj.message;
		} catch (error) {
			hasError = true;
		} finally {
			isFetching = false;
		}
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
{:else if isFetching}
	<p>loading...</p>
{:else}
	<img src={imgSrc} alt="dog" />
{/if}
