const lojatek = new LOJatek(0);

QUnit.module('ellenorzes()', function() {
    QUnit.test('Létezik-e?', function(assert) {
        assert.ok(lojatek.ellenorzes, "Létezik!");
      });
      QUnit.test('Függvény-e?', function(assert) {
          assert.ok(typeof lojatek.ellenorzes==="function", "Függvény!");
        });
        QUnit.test('Minden lámpa fel van kapcsolva?', function(assert) {
            for (let index = 0; index < 9; index++) {
                    lampak[index].allapot=true;
                    assert.ok(lampak[index].allapot, "Felvan kapcsolva!");
                }
          });
          QUnit.test('Minden lámpa le van kapcsolva?', function(assert) {
            for (let index = 0; index < 9; index++) {
                    lampak[index].allapot=false;
                    assert.ok(!lampak[index].allapot, "Le van kapcsolva!");
                }
          });
          QUnit.test('Néhány elem felkapcsolva', function(assert) {
            const lojatek = new LOJatek(5);
            assert.equal(lojatek.ellenorzes(), (5));
        });
  });

  QUnit.module('szomszedokValtoztatasa()', function() {
    QUnit.test('Létezik-e?', function(assert) {
        assert.ok(lojatek.szomszedokValtoztatasa, "Létezik!");
      });
      QUnit.test('Függvény-e?', function(assert) {
          assert.ok(typeof lojatek.szomszedokValtoztatasa==="function", "Függvény!");
        });
        QUnit.test('Középső lámpa', function(assert) {
            const lojatek = new LOJatek(0);
            for (let index = 0; index < 9; index++) {
                lampak[index].allapot=false;
            }
            lojatek.szomszedokValtoztatasa(4)
            assert.ok(lampak[1].allapot, "Felette");
            assert.ok(lampak[3].allapot, "Balra");
            assert.ok(lampak[5].allapot, "Jobbra");
            assert.ok(lampak[7].allapot, "Alatta");
        });
        QUnit.test('Bal felső lámpa', function(assert) {
            const lojatek = new LOJatek(0);
            for (let index = 0; index < 9; index++) {
                lampak[index].allapot=false;
            }
            lojatek.szomszedokValtoztatasa(0)
            assert.ok(lampak[1].allapot, "Jobbra");
            assert.ok(lampak[3].allapot, "Alatta");
        });
        QUnit.test('Jobb felső lámpa', function(assert) {
            const lojatek = new LOJatek(0);
            for (let index = 0; index < 9; index++) {
                lampak[index].allapot=false;
            }
            lojatek.szomszedokValtoztatasa(2)
            assert.ok(lampak[1].allapot, "Balra");
            assert.ok(lampak[5].allapot, "Alatta");
        });
        QUnit.test('Bal alsó lámpa', function(assert) {
            const lojatek = new LOJatek(0);
            for (let index = 0; index < 9; index++) {
                lampak[index].allapot=false;
            }
            lojatek.szomszedokValtoztatasa(6)
            assert.ok(lampak[3].allapot, "Felette");
            assert.ok(lampak[7].allapot, "Jobbra");
        });
        QUnit.test('Jobb alsó lámpa', function(assert) {
            const lojatek = new LOJatek(0);
            for (let index = 0; index < 9; index++) {
                lampak[index].allapot=false;
            }
            lojatek.szomszedokValtoztatasa(8)
            assert.ok(lampak[5].allapot, "Felette");
            assert.ok(lampak[7].allapot, "Balra");
        });
        QUnit.test('Jobb középső lámpa', function(assert) {
            const lojatek = new LOJatek(0);
            for (let index = 0; index < 9; index++) {
                lampak[index].allapot=false;
            }
            lojatek.szomszedokValtoztatasa(5)
            assert.ok(lampak[2].allapot, "Felette");
            assert.ok(lampak[4].allapot, "Balra");
            assert.ok(lampak[8].allapot, "Alatta");
        });
        QUnit.test('Bal középső lámpa', function(assert) {
            const lojatek = new LOJatek(0);
            for (let index = 0; index < 9; index++) {
                lampak[index].allapot=false;
            }
            lojatek.szomszedokValtoztatasa(3)
            assert.ok(lampak[0].allapot, "Felette");
            assert.ok(lampak[4].allapot, "Jobbra");
            assert.ok(lampak[6].allapot, "Alatta");
        });
        QUnit.test('Első sor középső lámpa', function(assert) {
            const lojatek = new LOJatek(0);
            for (let index = 0; index < 9; index++) {
                lampak[index].allapot=false;
            }
            lojatek.szomszedokValtoztatasa(1)
            assert.ok(lampak[0].allapot, "Balra");
            assert.ok(lampak[2].allapot, "Jobbra");
            assert.ok(lampak[4].allapot, "Alatta");
        });
        QUnit.test('Utolsó sor középső lámpa', function(assert) {
            const lojatek = new LOJatek(0);
            for (let index = 0; index < 9; index++) {
                lampak[index].allapot=false;
            }
            lojatek.szomszedokValtoztatasa(7)
            assert.ok(lampak[4].allapot, "Felette");
            assert.ok(lampak[6].allapot, "Balra");
            assert.ok(lampak[8].allapot, "Jobbra");
        });
  });



  QUnit.module('Játéktér', function() {
    QUnit.test('Létrejön-e a megfelelő számú elem?', function(assert) {
        const lojatek = new LOJatek(0);
      assert.equal(lampak.length, (9));
    });
    QUnit.test('Jó-e az elem id-k?', function(assert) {
        const lojatek = new LOJatek(0);
        for (let index = 0; index < lampak.length; index++) {
            assert.equal(lampak[index].dataId, (index));
        }
    });
  });