/* Bomack
	NLC Random Eye Color Change.
*/
var status = 0;
var price = 1000000;
var colors = Array();

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (mode == 0 && status == 0) {
			cm.dispose();
			return;
		}
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
			cm.sendSimple("Hi, there~! I'm Bomack. If you have a #b#t5152035##k, I can prescribe the right kind of cosmetic lenses for you. Now, what would you like to do?\r\n#L1#I would like to buy a #b#t5152035##k for " + price + " mesos, please!#l\r\n\#L2#I already have a Coupon!#l");						
		} else if (status == 1) {
			if (selection == 1) {
				if(cm.getMeso() >= price) {
					cm.gainMeso(-price);
					cm.gainItem(5152035, 1);
					cm.sendOk("Enjoy!");
				} else {
					cm.sendOk("You don't have enough mesos to buy a coupon!");
				}
				cm.dispose();
			} else if (selection == 2) {
				if (cm.getChar().getGender() == 0) {
					var current = cm.getChar().getFace()
 % 100 + 20000;
				}
				if (cm.getChar().getGender() == 1) {
					var current = cm.getChar().getFace()
 % 100 + 21000;
				}
				colors = Array();
				colors = Array(current , current + 100, current + 200, current + 300, current +400, current + 500, current + 600, current + 700);
				cm.sendYesNo("If you use the regular coupon, you'll be awarded a random pair of cosmetic lenses. Are you going to use #b#t5152035##k and really make the change to your eyes?");
			}
		}
		else if (status == 2){
			cm.dispose();
			if (cm.haveItem(5152035) == true){
				cm.gainItem(5152035, -1);
				cm.setFace(colors[Math.floor(Math.random() * colors.length)]);
				cm.sendOk("Enjoy your new and improved cosmetic lenses!");
			} else {
				cm.sendOk("I'm sorry, but I don't think you have our cosmetic lens coupon with you right now. Without the coupon, I'm afraid I can't do it for you..");		
			}
		}
	}
}
