# Input

```
initialState = { inputValue: '' };
<Input value={state.inputValue}
  placeholder="e.g. Type here"
  onChange={(event) => setState({ inputValue: event.target.value })} />
```

## Add size

```
initialState = { inputValue: '' };
<Input value={state.inputValue}
  size={2}
  onChange={(event) => setState({ inputValue: event.target.value })} />
```

## Textarea

```
initialState = { inputValue: '' };
<Input value={state.inputValue}
  type='textarea'
  onChange={(event) => setState({ inputValue: event.target.value })} />
```
