function countdown() {
	return {
		seconds: "00",
		minutes: "00",
		hours: "00",
		days: "00",
		distance: 0,
		countdown: null,
		launchTime: new Date("June 01, 2021 18:00:00").getTime(),
		now: new Date().getTime(),
		start: function () {
			this.countdown = setInterval(() => {
				// Calculate time
				this.now = new Date().getTime();
				this.distance = this.launchTime - this.now;
				// Set Times
				this.days = this.padNum(Math.floor(this.distance / (1000 * 60 * 60 * 24)));
				this.hours = this.padNum(Math.floor((this.distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
				this.minutes = this.padNum(Math.floor((this.distance % (1000 * 60 * 60)) / (1000 * 60)));
				this.seconds = this.padNum(Math.floor((this.distance % (1000 * 60)) / 1000));
				// Stop
				if (this.distance < 0) {
					clearInterval(this.countdown);
					this.days = "00";
					this.hours = "00";
					this.minutes = "00";
					this.seconds = "00";
				}
			}, 100);
		},
		padNum: function (num) {
			var zero = "";
			for (var i = 0; i < 2; i++) {
				zero += "0";
			}
			return (zero + num).slice(-2);
		},
	};
}
