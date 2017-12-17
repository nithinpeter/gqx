import React, { Component } from 'react';
import { Query, Field, render } from '../src';

const query = render(
  <Query name="DogDetailsQuery">
    <Field name="food" args={{ contains: 'corn'}}>
        <Field name="description"/>
    </Field>
  </Query>
);

console.log(query);