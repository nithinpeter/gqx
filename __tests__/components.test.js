import React, { Component } from 'react';
import { Query, Mutation, Field, render } from '../src';

it('should render query', () => {
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
  expect(query).toMatchSnapshot();
});

it('should render mutation', () => {
  const mutation = render(
    <Mutation name="DogDetailsQuery">
      <Field name="dogName" />
      <Field name="human" alias="hooman">
        <Field name="address">
          <Field name="addressLine1" />
          <Field name="state" />
        </Field>
      </Field>
    </Mutation>
  );
  expect(mutation).toMatchSnapshot();
});
