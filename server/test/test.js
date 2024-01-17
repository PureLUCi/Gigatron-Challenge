const request = require('supertest');
const express = require('express');
const app = require('../dist/index'); // Import your app

const chai = require('chai');
const expect = chai.expect;

describe('POST /api/upload', function() {
  it('responds with json', function(done) {
    request(app)
      .post('/api/upload')
      .attach('image', 'test/tedy.jpeg') // Path to a test image file
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function(err, res) {
        if (err) return done(err);
        expect(res.body).to.have.property('status');
        expect(res.body.status).to.equal(200);
        done();
      });
  });
});