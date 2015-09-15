describe('Contact', function() {
  it("creates a new contact with given specifications", function() {
    var testContact = new Contact("Rita", "Moreno");
    expect(testContact.firstName).to.equal("Rita");
    expect(testContact.lastName).to.equal("Moreno");
    expect(testContact.addresses).to.eql([]);
  });

  it("adds the fullName method to all contacts", function() {
    var testContact = new Contact("Pablo", "Picasso");
    expect(testContact.fullName()).to.equal("Pablo Picasso");
  });
});
