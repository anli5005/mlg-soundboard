angular.module("MLGSoundboard", ["ngMaterial"])
  .controller("SoundboardController", function($scope, sounds, defaultBackground, $window) {
    $scope.sounds = sounds;
    $scope.currentSound = undefined;
    $scope.currentSoundName = "No Sound";
    $scope.playSound = function(sound, event) {
      event.preventDefault();
      if (sound.sound) {
        $scope.currentSound ? $scope.currentSound.pause() : angular.noop();
        $scope.currentSound = new Audio(sound.sound);
        $scope.currentSound.loop = $scope.repeat;
        $scope.currentSound.play();
        $scope.currentSoundName = sound.name;
        if (sound.image) {
          $scope.background = sound.image;
        } else {
          $scope.background = defaultBackground;
        }
      }
    };
    $window.setInterval(function() {
      $scope.$apply();
    }, 100);

    $scope.play = function() {
      if ($scope.currentSound) {
        ($scope.currentSound.paused || $scope.currentSound.ended) ? $scope.currentSound.play() : $scope.currentSound.pause();
      }
    };

    $scope.repeat = false;
    $scope.toggleRepeat = function() {
      $scope.repeat = !$scope.repeat;
      if ($scope.currentSound) {
        $scope.currentSound.loop = $scope.repeat;
      }
    };

    $scope.background = defaultBackground;
    $scope.backgroundImage = function() {
      return {"background-image": "url('" + $scope.background + "')"}
    };
  })
  .filter("timeFilter", function() { return function(input) {
    var seconds = Math.floor(input);
    return Math.floor(seconds / 60).toString() + ":" + ((seconds % 60 < 10) ? "0" : "") + (seconds % 60).toString();
  }})
  .value("defaultBackground", "img/mlg.jpg")
  .value("sounds", [
    {
      name: "MLG Classics",
      sounds: [
        {
          name: "Airhorn",
          sound: "sound/AIRHORN.mp3",
          image: "img/airhorn.png",
          width: 2,
          height: 2
        },
        {
          name: "Intervention 420",
          sound: "sound/intervention 420.mp3",
          image: "img/noscope.png",
          width: 2,
          height: 2
        },
        {
          name: "Hitmarker",
          sound: "sound/HITMARKER.mp3",
          image: "img/hitmarker.jpg",
          width: 2,
          height: 1
        },
        {
          name: "MLG Horn",
          sound: "sound/MLG Horn.mp3",
          width: 2,
          height: 1
        }
      ]
    },
    {
      name: "OOOOOOOHHHHHHHH",
      sounds: [
        {
          name: "OOOOHMYGOOOOD",
          sound: "sound/OOOOOOOOHMYGOOOOD.mp3",
          width: 2,
          height: 1
        },
        {
          name: "OMG TRICKSHOT",
          sound: "sound/OMG TRICKSHOT CHILD.mp3",
          width: 2,
          height: 1
        },
        {
          name: "Wombo Combo",
          sound: "sound/WOMBO COMBO.mp3",
          width: 2,
          height: 2
        },
        {
          name: "Mom get the camera",
          sound: "sound/MOM GET THE CAMERA.mp3",
          width: 2,
          height: 1
        },
        {
          name: "Oh Baby A Triple",
          sound: "sound/Oh Baby A Triple.mp3",
          width: 2,
          height: 1
        }
      ]
    },
    {
      name: "Dank Memes",
      sounds: [
        {
          name: "Where'd you find this",
          sound: "sound/DAMN SON WHERED YOU FIND THIS.mp3",
          width: 2,
          height: 1
        },
        {
          name: "Sanic",
          sound: "sound/SANIC.mp3",
          image: "img/sanic.png",
          height: 2,
          width: 2
        },
        {
          name: "Get Noscoped",
          sound: "sound/GET NOSCOPED.mp3",
          height: 1,
          width: 2
        },
        {
          name: "Wow Effect",
          sound: "sound/DAMN SON WOW.mp3",
          width: 2,
          height: 1
        },
        {
          name: "REKT",
          sound: "sound/REKT.mp3",
          image: "img/REKT.jpg",
          width: 2,
          height: 1
        },
        {
          name: "Never Done That",
          sound: "sound/NEVER DONE THAT.mp3",
          width: 2,
          height: 1
        },
        {
          name: "Smoke",
          sound: "sound/SMOKE WEEK EVERYDAY.mp3",
          image: "img/weed.jpg",
          width: 2,
          height: 1
        },
        {
          name: "Shots Fired",
          sound: "sound/SHOTS FIRED.mp3",
          width: 2,
          height: 1
        },
        {
          name: "wow",
          sound: "sound/wow .mp3",
          image: "img/eddywally.jpg",
          width: 2,
          height: 1
        },
        {
          name: "Dedotaded Wam",
          sound: "sound/DEDOTADED WAM.mp3",
          width: 2,
          height: 1
        },
        {
          name: "Tactical Nuke",
          sound: "sound/tactical nuke.mp3",
          image: "img/nuke.png",
          width: 2,
          height: 1
        },
        {
          name: "Another One",
          sound: "sound/Another One.mp3",
          image: "img/Another One.jpg",
          width: 2,
          height: 1
        }
      ]
    },
    {
      name: "Dank Music",
      sounds: [
        {
          name: "2SAD4ME",
          sound: "sound/2SAD4ME.mp3",
          full: "https://www.youtube.com/watch?v=aFZ7bBaYpcw",
          image: "img/2SAD4ME.jpg",
          width: 2,
          height: 1,
        },
        {
          name: "Whatcha Say",
          sound: "sound/Whatcha Say.mp3",
          full: "https://www.youtube.com/watch?v=pBI3lc18k8Q",
          image: "img/WhatchaSay.jpg",
          width: 2,
          height: 1
        },
        {
          name: "Skrillex Scary",
          sound: "sound/SKRILLEX Scary.mp3",
          full: "https://youtu.be/WSeNSzJ2-Jw?t=39s",
          image: "img/Skrillex.jpg",
          width: 2,
          height: 1
        },
        {
          name: "2SED4AIRHORN",
          sound: "sound/2SED4AIRHORN.mp3",
          width: 2,
          height: 1
        },
        {
          name: "Airhorn Sonata",
          sound: "sound/AIRHORN SONATA.mp3",
          width: 2,
          height: 1
        },
        {
          name: "Darude - Dankstorm",
          sound: "sound/Darude - Dankstorm.mp3",
          full: "https://www.youtube.com/watch?v=u9ymUX1fJLw",
          image: "img/dankstorm.jpg",
          width: 2,
          height: 2
        },
        {
          name: "AND HIS NAME IS",
          sound: "sound/AND HIS NAME IS JOHN CENA.mp3",
          full: "https://www.youtube.com/watch?v=enMReCEcHiM",
          image: "img/AND_HIS_NAME_IS_JOHN_CENA.jpg",
          width: 4,
          height: 1
        }
      ]
    },
    {
      name: "ILLUMINATI",
      sounds: [
        {
          name: "Illuminati Confirmed",
          sound: "sound/Illuminati.mp3",
          image: "img/illuminati.jpg",
          width: 2,
          height: 2
        },
        {
          name: "MLG Illuminati",
          sound: "sound/MLG Illuminati.mp3",
          image: "img/illuminati-airhorn.jpg",
          width: 2,
          height: 2
        }
      ]
    },
    {
      name: "Vines",
      sounds: [
        {
          name: "What Are Those?",
          sound: "sound/What Are Those.mp3",
          image: 'img/whatrthose.jpg',
          width: 2,
          height: 2
        },
        {
          name: "9+10",
          sound: "sound/910.mp3",
          width: 2,
          height: 1
        },
        {
          name: "He Needs Some Milk",
          sound: "sound/He need some milk.mp3",
          image: "img/milk.jpg",
          width: 2,
          height: 2
        },
        {
          name: "21",
          sound: "sound/21.mp3",
          width: 2,
          height: 1
        }
      ]
    }
  ])
