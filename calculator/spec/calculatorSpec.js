//demonstrates use of expected exceptions
describe("#resume", function () {
    it("should throw an exception if song is already playing", function () {
       // player.play(song);

        expect(function () {
            player.resume();
        }).toThrowError("************************* song is already playing");
    });
});
