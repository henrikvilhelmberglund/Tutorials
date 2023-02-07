<script>
	let selectedBreed;
	const breeds = ["affenpinscher", "african", "airedale"];

	async function getRandomDogImage(breed) {
		const response = await fetch(`https://dog.ceo/api/breed/${breed}/images/random`);
		const obj = await response.json();
		return obj;
	}
</script>

<select name="" bind:value={selectedBreed} id="">
	{#each breeds as breed}
		<option value={breed}>{breed}</option>
	{/each}
</select>

Selected breed: {selectedBreed}

<hr w-full />

{#await getRandomDogImage(selectedBreed)}
	<p>loading...</p>
{:then obj}
	<img src={obj.message} alt="dog" />
{:catch error}
	<p>oops! error! {error}</p>
{/await}
