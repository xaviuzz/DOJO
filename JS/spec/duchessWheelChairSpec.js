describe("the Duchess' wheelchair", function() {
  var chair;

  beforeEach(function() {
  });

  it("starts facing North direction by default", function() {
    var chair=new DuchessWheelChair();
    expect(chair.whereAreYouFacing()).toEqual('N');
  });

});