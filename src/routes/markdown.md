<script>
  import Button from "./Button.svelte"
</script>

# hello 
 
```js
// test
```

## what 

### is this

- hello

- hello too

```svelte example
<script>
  let count = 0;

  function handleClick() {
    count += 1;
  }
</script>

<button on:click={handleClick}>
  Clicked {count}
  {count === 1 ? "time" : "times"}
</button>

<style>
</style>


```

<style>
</style>
