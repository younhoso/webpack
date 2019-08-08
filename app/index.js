
import _ from 'lodash';
import $ from 'jquery';

function component () {
  var element = document.createElement('div');

  $(element).html( _.join(['Hello','webpack'], ' '));

  return element;
}

document.body.appendChild(component());