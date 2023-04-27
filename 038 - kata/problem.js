// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// prototypega stiring katta harf bolsa kichikka kichik harf bolsa katta harfga ozgartirib beruvchi function yozib bering?

String.prototype.toAlternatingCase = function () {
  return this.split ('')
    .map (a => (a === a.toUpperCase () ? a.toLowerCase () : a.toUpperCase ()))
    .join ('');
};

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
