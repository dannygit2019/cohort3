import cantax
def testCanTax():
    # testing if < $47,630
    assert cantax.calculateTaxes(40000)==6000.00
    assert cantax.calculateTaxes(47630)==7144.5
    # testing if > 47630 but less than $95,259
    assert cantax.calculateTaxes(47631)==7144.705
    assert cantax.calculateTaxes(95259)==16908.445
    # testing if > 95259 but less than $147,667
    assert cantax.calculateTaxes(95260)==16908.705
    assert cantax.calculateTaxes(147667)==30534.525
    # testing if > 147,667 but less than $210, 371
    assert cantax.calculateTaxes(147668)==30534.815
    assert cantax.calculateTaxes(210371)==48718.685
     # testing if > $210,371
    assert cantax.calculateTaxes(210372)==48719.015
    assert cantax.calculateTaxes(220000)==51896.255