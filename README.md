# GQX

A simple GraphQL query builder using JSX.

## Install

`npm install gqx` / `yarn add gqx`

## Examples
1. Query example and usage of 'alias':
``` js
const query = render(
  <Query name="DogDetailsQuery">
    <Field name="dogName" />
    <Field name="human" alias="hooman">
      <Field name="address">
        <Field name="addressLine1" />
        <Field name="state" />
      </Field>
    </Field>
  </Query>
);

// Generated Query:

query DogDetailsQuery {
  dogName
  hooman: human {
    address {
      addressLine1
      state
    }
  }
}
```
2. Query example - passing arguments
``` js
const query = render(
  <Query name="DogFoodDetailsQuery">
    <Field name="food" args={{ contains: 'corn'}}>
        <Field name="description">
    </Field>
  </Query>
);

// Generated Query:

query DogFoodDetailsQuery {
  food(contains: "corn") {
    description
  }
}
```