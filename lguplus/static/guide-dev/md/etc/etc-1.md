<!-- prettier-ignore-start -->

# Lodash란 무엇인가요?

<br>

<div class="container-fluid mt-4">
  <div class="row">
    <div class="col text-left">
        <img src="/guide-dev/img/etc/Lodash.png" class="img-thumbnail is-pd-10" style="width:300px" />
    </div>
  </div>
</div>

<br><br>

## Lodash

프로그래밍 작업을위한 유틸리티 기능을 제공하는 JavaScript 라이브러리입니다.

---

### \_.uniqBy(array, [iteratee=_.identity])

<div style="width: 500px">

```js
_.uniqBy([2.1, 1.2, 2.3], Math.floor);
// => [2.1, 1.2]
 
// The `_.property` iteratee shorthand.
_.uniqBy([{ 'x': 1 }, { 'x': 2 }, { 'x': 1 }], 'x');
// => [{ 'x': 1 }, { 'x': 2 }]
```

</div>

---


### \_.sortBy(collection, [iteratees=[_.identity]])

<div style="width: 500px">

```js
var users = [
  { 'user': 'fred',   'age': 48 },
  { 'user': 'barney', 'age': 36 },
  { 'user': 'fred',   'age': 40 },
  { 'user': 'barney', 'age': 34 }
];
 
_.sortBy(users, [(o) => { return o.user; }]);
// => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 40]]
 
_.sortBy(users, ['user', 'age']);
// => objects for [['barney', 34], ['barney', 36], ['fred', 40], ['fred', 48]]
```

</div>

---

### \_.cloneDeep(value)

<div style="width: 500px">

```js
var objects = [{ 'a': 1 }, { 'b': 2 }];
 
var deep = _.cloneDeep(objects);
console.log(deep[0] === objects[0]);
// => false
```

</div>

---

### \_.forEach(collection, [iteratee=_.identity])

<div style="width: 500px">

```js
_.forEach([1, 2], (value) => {
  console.log(value);
});
// => Logs `1` then `2`.

_.forEach({ a: 1, b: 2 }, (value, key) => {
  console.log(key);
});
// => Logs 'a' then 'b' (iteration order is not guaranteed).
```

</div>

---

### \_.filter(collection, [predicate=_.identity])

<div style="width: 500px">

```js
var users = [
  { user: 'barney', age: 36, active: true },
  { user: 'fred', age: 40, active: false },
];

_.filter(users, (o) => {
  return !o.active;
});
// => objects for ['fred']

// The `_.matches` iteratee shorthand.
_.filter(users, { age: 36, active: true });
// => objects for ['barney']

// The `_.matchesProperty` iteratee shorthand.
_.filter(users, ['active', false]);
// => objects for ['fred']

// The `_.property` iteratee shorthand.
_.filter(users, 'active');
// => objects for ['barney']
```

</div>

---

### \_.find(collection, [predicate=_.identity], [fromIndex=0])

<div style="width: 500px">

```js
var users = [
  { user: 'barney', age: 36, active: true },
  { user: 'fred', age: 40, active: false },
  { user: 'pebbles', age: 1, active: true },
];

_.find(users, (o) => {
  return o.age < 40;
});
// => object for 'barney'

// The `_.matches` iteratee shorthand.
_.find(users, { age: 1, active: true });
// => object for 'pebbles'

// The `_.matchesProperty` iteratee shorthand.
_.find(users, ['active', false]);
// => object for 'fred'

// The `_.property` iteratee shorthand.
_.find(users, 'active');
// => object for 'barney'
```

</div>

---

### \_.map(collection, [iteratee=_.identity])

<div style="width: 500px">

```js
function square(n) {
  return n * n;
}

_.map([4, 8], square);
// => [16, 64]

_.map({ a: 4, b: 8 }, square);
// => [16, 64] (iteration order is not guaranteed)

var users = [{ user: 'barney' }, { user: 'fred' }];

// The `_.property` iteratee shorthand.
_.map(users, 'user');
// => ['barney', 'fred']
```

</div>

---

### \_.findIndex(array, [predicate=_.identity], [fromIndex=0])

<div style="width: 500px">

```js
var users = [
  { user: 'barney', active: false },
  { user: 'fred', active: false },
  { user: 'pebbles', active: true },
];

_.findIndex(users, (o) => {
  return o.user == 'barney';
});
// => 0

// The `_.matches` iteratee shorthand.
_.findIndex(users, { user: 'fred', active: false });
// => 1

// The `_.matchesProperty` iteratee shorthand.
_.findIndex(users, ['active', false]);
// => 0

// The `_.property` iteratee shorthand.
_.findIndex(users, 'active');
// => 2
```

</div>

---

### \_.remove(array, [predicate=_.identity])

<div style="width: 500px">

```js
var array = [1, 2, 3, 4];
var evens = _.remove(array, (n) => {
  return n % 2 == 0;
});

console.log(array);
// => [1, 3]

console.log(evens);
// => [2, 4]
```

</div>

---

### \_.reduce(collection, [iteratee=_.identity], [accumulator])

<div style="width: 500px">

```js
_.reduce(
  [1, 2],
  (sum, n) => {
    return sum + n;
  },
  0
);
// => 3

_.reduce(
  { a: 1, b: 2, c: 1 },
  (result, value, key) => {
    (result[value] || (result[value] = [])).push(key);
    return result;
  },
  {}
);
// => { '1': ['a', 'c'], '2': ['b'] } (iteration order is not guaranteed)
```

</div>

---

### \_.includes(collection, value, [fromIndex=0])

<div style="width: 500px">

```js
_.includes([1, 2, 3], 1);
// => true

_.includes([1, 2, 3], 1, 2);
// => false

_.includes({ a: 1, b: 2 }, 1);
// => true

_.includes('abcd', 'bc');
// => true
```

</div>

---

### \_.every(collection, [predicate=_.identity])

<div style="width: 500px">

```js
_.every([true, 1, null, 'yes'], Boolean);
// => false

var users = [
  { user: 'barney', age: 36, active: false },
  { user: 'fred', age: 40, active: false },
];

// The `_.matches` iteratee shorthand.
_.every(users, { user: 'barney', active: false });
// => false

// The `_.matchesProperty` iteratee shorthand.
_.every(users, ['active', false]);
// => true

// The `_.property` iteratee shorthand.
_.every(users, 'active');
// => false
```

</div>

---


<!-- prettier-ignore-end -->
