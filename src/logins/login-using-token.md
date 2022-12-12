# Login using an authentication token

Logging in using an authentication token is easy! Here's how you would go about it:

```js 
// RBXFLIP AUTH TOKEN LOGIN
{
	let token = "PASTE TOKEN VALUE HERE";
	window.localStorage["accessToken"] = token;
	// RESET THE PAGE
  location.reload();
}
```


```js 
// BLOXFLIP AUTH TOKEN LOGIN
{
	let token = "PASTE TOKEN VALUE HERE";
	window.localStorage["_DO_NOT_SHARE_BLOXFLIP_TOKEN"] = token;
	// RESET THE PAGE
  location.reload();
}
```


## Other sites

replace `window.localStorage["accessToken"] = token;`'s `accessToken` with the name of they auth tokens key from its key-value pair in localStorage.
