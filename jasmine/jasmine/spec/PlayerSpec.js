// describe("Player", function() {
//   var player;
//   var song;

//   beforeEach(function() {
//     player = new Player();
//     song = new Song();
//   });

//   it("should be able to play a Song", function() {
//     player.play(song);
//     expect(player.currentlyPlayingSong).toEqual(song);

//     //demonstrates use of custom matcher
//     expect(player).toBePlaying(song);
//   });

//   describe("when song has been paused", function() {
//     beforeEach(function() {
//       player.play(song);
//       player.pause();
//     });

//     it("should indicate that the song is currently paused", function() {
//       expect(player.isPlaying).toBeFalsy();

//       // demonstrates use of 'not' with a custom matcher
//       expect(player).not.toBePlaying(song);
//     });

//     it("should be possible to resume", function() {
//       player.resume();
//       expect(player.isPlaying).toBeTruthy();
//       expect(player.currentlyPlayingSong).toEqual(song);
//     });
//   });

//   // demonstrates use of spies to intercept and test method calls
//   it("tells the current song if the user has made it a favorite", function() {
//     spyOn(song, 'persistFavoriteStatus');

//     player.play(song);
//     player.makeFavorite();

//     expect(song.persistFavoriteStatus).toHaveBeenCalledWith(true);
//   });

//   //demonstrates use of expected exceptions
//   describe("#resume", function() {
//     it("should throw an exception if song is already playing", function() {
//       player.play(song);

//       expect(function() {
//         player.resume();
//       }).toThrowError("song is already playing");
//     });
//   });
// });


/* Learn jasmine test framework */
// describe('JavaScript addition operator', function() {
//     it('Adds two numbers together', function() {
//         expect(1 + 2).toEqual(3);
//     })
// });

// describe('Person object', function() {
//     var tam = new Person('Tam', 23);

//     it('show me function', function() {
//         expect(tam.showMe()).toThrow(new Error('Error show me function'));
//     })
// });

// describe('Defined', function() {
//     var tam; //= new Person('Tam', 23);

//     it('check to be defined', function() {
//         expect(tam).toBeDefined();
//     })

//     it('check to be undefined', function() {
//         expect(tam).toBeUndefined();
//     })
// });

/* Learning the Matchers */
describe('Learning the Matchers', function() {
    // toBeDefined / toBeUndefined
    describe('toBeDefined / toBeUndefined', function() {
            it("is defined", function() {
                var name = "Andrew";
                expect(name).toBeDefined();
            })

            it("is not defined", function() {
                var name;
                expect(name).toBeUndefined();
            });
        })
    // toBeTruthy / toBeFalsy
    describe('toBeTruthy / toBeFalsy', function() {
            var flag;
            // Covering Before
            beforeEach(function() {
                flag = true;
            });
            it("is true", function() {
                expect(flag).toBeTruthy();
            });
            // Covering After
            //afterEach(function() {
            // flag = false;
            // });
            it("is false", function() {
                expect(false).toBeFalsy();
            });
        })
    // toBeLessThan / toBeGreaterThan
    describe('toBeLessThan / toBeGreaterThan', function() {
            it("is less than 10", function() {
                expect(5).toBeLessThan(10);
            });
            it("is greater than 10", function() {
                expect(20).toBeGreaterThan(10);
            });
        })
    // toMatch
    describe('toMatch', function() {
            it("outputs the right text", function() {
                expect('123').toMatch(/[0-9]/);
            });
        })
    // toContain
    describe('toContain', function() {
            it("should contain oranges", function() {
                expect(["apples", "oranges", "pears"]).toContain("oranges");
            });
        })
    // between
    describe('between', function() {
        it("is between 5 and 30", function() {
            expect(10).toBeBetween(5, 30);
        });
        it("is between 30 and 500", function() {
            expect(100).toBeBetween(500, 30);
        });
    })
})
