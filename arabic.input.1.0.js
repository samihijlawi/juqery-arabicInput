  (function($) {

	$.fn.arabicInput = function() {
		
		function replaceList () {
				var currentLetter = this.value;
				currentLetter = currentLetter.replace(/’/g, "\'");
				currentLetter = currentLetter.replace(/[aâàā]/g, "ا");
				currentLetter = currentLetter.replace(/اا/g, "آ");
				currentLetter = currentLetter.replace(/b/g, "ب");
				currentLetter = currentLetter.replace(/ب'/g, "پ");
				currentLetter = currentLetter.replace(/p/g, "پ");
				currentLetter = currentLetter.replace(/t/g, "ت");
				currentLetter = currentLetter.replace(/ت'/g, "ث");
				currentLetter = currentLetter.replace(/ṯ/g, "ث");
				currentLetter = currentLetter.replace(/[jǧ]/g, "ج");
				currentLetter = currentLetter.replace(/ج'/g, "چ");
				currentLetter = currentLetter.replace(/c/g, "چ");
				currentLetter = currentLetter.replace(/[HḥḤ]/g, "ح");
				currentLetter = currentLetter.replace(/ح'/g, "خ");
				currentLetter = currentLetter.replace(/[xẖK]/g, "خ");
				currentLetter = currentLetter.replace(/d/g, "د");
				currentLetter = currentLetter.replace(/د'/g, "ذ");
				currentLetter = currentLetter.replace(/ḏ/g, "ذ");
				currentLetter = currentLetter.replace(/r/g, "ر");
				currentLetter = currentLetter.replace(/ر'/g, "ز");
				currentLetter = currentLetter.replace(/z/g, "ز");
				currentLetter = currentLetter.replace(/s/g, "س");
				currentLetter = currentLetter.replace(/س'/g, "ش");
				currentLetter = currentLetter.replace(/š/g, "ش");
				currentLetter = currentLetter.replace(/[Sṣ]/g, "ص");
				currentLetter = currentLetter.replace(/ص'/g, "ض");
				currentLetter = currentLetter.replace(/[Dḍ]/g, "ض");
				currentLetter = currentLetter.replace(/[Tṭ]/g, "ط");
				currentLetter = currentLetter.replace(/ط'/g, "ظ");
				currentLetter = currentLetter.replace(/[Zẓ]/g, "ظ");
				currentLetter = currentLetter.replace(/[gʿ]/g, "ع");
				currentLetter = currentLetter.replace(/ع'/g, "غ");
				currentLetter = currentLetter.replace(/ġ/g, "غ");
				currentLetter = currentLetter.replace(/f/g, "ف");
				currentLetter = currentLetter.replace(/ف'/g, "ڤ");
				currentLetter = currentLetter.replace(/v/g, "ڢ");
				currentLetter = currentLetter.replace(/q/g, "ق");
				currentLetter = currentLetter.replace(/ق'/g, "ڨ");
				currentLetter = currentLetter.replace(/k/g, "ك");
				currentLetter = currentLetter.replace(/ك'/g, "ڭ");
				currentLetter = currentLetter.replace(/l/g, "ل");
				currentLetter = currentLetter.replace(/m/g, "م");
				currentLetter = currentLetter.replace(/n/g, "ن");
				currentLetter = currentLetter.replace(/h/g, "ا");
				currentLetter = currentLetter.replace(/ه'/g, "ل");
				currentLetter = currentLetter.replace(/[wouôûōū]/g, "و");
				currentLetter = currentLetter.replace(/[yieîī]/g, "ي");
				currentLetter = currentLetter.replace(/[YIE]/g, "ى");
				currentLetter = currentLetter.replace(/-/g, "ء");
				currentLetter = currentLetter.replace(/ʾ/g, "ء");
				currentLetter = currentLetter.replace(/وءء/g, "ؤ");
				currentLetter = currentLetter.replace(/يءء/g, "ئ");
				currentLetter = currentLetter.replace(/اءء/g, "إ");
				currentLetter = currentLetter.replace(/I/g, "إ");
				currentLetter = currentLetter.replace(/A/g, "إ");
				currentLetter = currentLetter.replace(/ءا/g, "أ");
				currentLetter = currentLetter.replace(/_/g, "ـ");
				currentLetter = currentLetter.replace(/\?/g, "؟");
				currentLetter = currentLetter.replace(/\;/g, "؛");
				currentLetter = currentLetter.replace(/\,/g, "،");
				this.value = currentLetter;
				this.focus();
			}
		
		// to enable action chaining
		return this.each(function() {

			// align text right to left
			this.dir = "rtl";

			// attach the keyup event to the element
			$(this).on("keyup", replaceList);
		});
	}

}(jQuery));
 
