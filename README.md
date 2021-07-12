# Two Wheels
*Developed By Ondre Williams - [See the app](https://twowheels.herokuapp.com/)*

When it comes to getting from point (A) to point (B), four wheeled transportation will certainly get the job done. But if you dare instead, to seek exhilarating experiences, thrilling adventures, and deep connection to the lands you traverse, Two Wheels my friend, is the prescription for you! With top of the line bikes suited for any type of terrain, Two Wheels is a one stop shop for mountain bikers, professional or brand new, to equip themselves for the journeys ahead.

## The Tech
![The Tech](/readme-resources/pern_stack.png)

### React / Redux / JavaScript Frontend
React, Redux, and Javascript power the frontend of Two Wheels to achieve a fast, dynamic user experience allowing them get out and hit the trails with speed. Pure vanilla CSS provides the custom styling to keep users excited about their next ride.

### Postgres / Express / JavaScript Backend
Postgres, Express, and JavaScript on the backend handle requests and serve data to the frontend of the application. PostgreSQL makes room for storage of rapidly increasing amounts of data, Express turned configuration into a breeze, and the ample JavaScript ecosystem provides any needed packages to make the app robust and keep development time to a minimum.

#### Code for product gallery with real-time search
```js
return (
    <div className="productsPage">
      <div className="searchContainer">
        <form className="productsSearch" >
          <input
          type="search"
          name="searchField"
          className="searchBox"
          autocomplete="off"
          placeholder="Search"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          >
          </input>
        </form>
      </div>

      <nav className="productsContainer">
        {products.filter(product =>
          product.name
          .toLowerCase()
          .includes(searchTerm.toLowerCase()))
          .map((product) => {

          return (
            <NavLink className="productLink" key={product.name} exact to={`/products/${product.id}`}>
              <div className="productCard">
                <div className="productImage">
                  <img clasName="productImg" src={product.imageUrl} alt="Product" />
                </div>
                <div className="cardHeader">
                  <p className="productTitle">{product.name}</p>
                  <p className="price">{`$${product.price}.00`}</p>
                </div>
              </div>
            </NavLink>
          );
        })}
      </nav>
    </div>
  );
```
## Conclusion
Two Wheels is an online shop born of my personal passion for mountain biking. As my first full-stack solo project, this app represents a "coming of age" for me as a full-stack engineer and allowed me to progress my skills substantially, while also being very fun to build. All improvements to Two Wheels will be documented here for any who'd like to follow the state of the project.

Thanks for checking out the app!
