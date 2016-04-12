beforeEach(function() {
    jasmine.addMatchers({
        toBePlaying: function() {
            return {
                compare: function(actual, expected) {
                    var player = actual;

                    return {
                        pass: player.currentlyPlayingSong === expected && player.isPlaying
                    };
                }
            };
        },
        toBeBetween: function(rangeFloor, rangeCeiling) {
            if (rangeFloor > rangeCeiling) {
                var temp = rangeFloor;
                rangeFloor = rangeCeiling;
                rangeCeiling = temp;
            }
            return this.actual > rangeFloor && this.actual < rangeCeiling;
        }
    });
});
