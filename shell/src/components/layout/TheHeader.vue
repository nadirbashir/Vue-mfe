<script></script>

<template>
  <header>
    <nav>
      <h1>
        <router-link to="/">Store</router-link>
      </h1>
      <ul>
        <li>
          <router-link to="/products">All Products</router-link>
        </li>
        <li>
          <router-link to="/cart">Cart</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
header {
  width: 100%;
  height: 5rem;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

header a {
  text-decoration: none;
  color: #000000ea;
  display: inline-block;
  padding: 0.2rem 0.5rem;
}
/* .active {
  border-bottom: 1px solid #000;
  font-size: 14px;
  font-weight: 600;
  } */

a:active,
a:hover,
a.router-link-active {
  border-bottom: 1px solid #000;
  font-size: 18px;
  font-weight: 600;
}

h1 {
  margin: 0;
}

h1 a {
  color: #000;
  margin: 0;
}

h1 a:hover,
h1 a:active,
h1 a.router-link-active {
  border-color: #fff;
}

header nav {
  width: 90%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

header ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

li {
  margin: 0 0.5rem;
}
</style>
