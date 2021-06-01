describe('Haeger homepage', function() {
    it('should aktuel', function() {
        browser.waitForAngularEnabled(false);
      browser.get('https://www.haeger-consulting.de/');
      var mitarbeiter = element(by.xpath('//*[@id="aktuell"]/div/div/div[3]/p[2]'));
      expect(mitarbeiter.getText()).toEqual('Unser Mitarbeiter Adrian Roman verbindet technisches Know-how mit systemischer Beratung')   ;
    }); 

    it('should service', function() {
    element(by.xpath('//*[@id="hauptmenu"]/ul/li[3]/a')).click();
    browser.sleep(1000);
    var sercice = element(by.xpath('//h2[.="Services"]'));
    expect(sercice.getText()).toEqual('Services')   ;
     
    });

    it('should team', function() {
      element(by.xpath('//*[@id="hauptmenu"]/ul/li[4]/a')).click();
      browser.sleep(1000);
      var team = element(by.xpath('//h3[@class="h2"]'));
      expect(team.getText()).toEqual('Was uns auszeichnet')   ;
       
      });

      it('should kultur', function() {
        element(by.xpath('//*[@id="hauptmenu"]/ul/li[5]/a')).click();
        browser.sleep(1000);
        var kultur = element(by.xpath('//h2[.="Unternehmenskultur"]'));
        expect(kultur.getText()).toEqual('Unternehmenskultur')   ;
         
      });
      
        it('should projekt', function() {
          element(by.xpath('//*[@id="hauptmenu"]/ul/li[6]/a')).click();
          browser.sleep(1000);
          var projekt = element(by.xpath('//h2[.="Projekte"]'));
          expect(projekt.getText()).toEqual('Projekte')   ;
           
      });

      it('should jobs', function() {
        element(by.xpath('//*[@id="hauptmenu"]/ul/li[7]/a')).click();
        browser.sleep(1000);
        var jobs = element(by.xpath('//h2[.="Jobs"]'));
        expect(jobs.getText()).toEqual('Jobs')   ;
          
        });

      it('should kontak', function() {
        element(by.xpath('//a[.="Kontakt"]')).click();
        browser.sleep(1000);
        var kontak = element(by.xpath('//h2[.="Kontakt"]'));
        expect(kontak.getText()).toEqual('Kontakt')   ;
          
        });

      it('should logo', function() {
        var lego_icon = element(by.id('heager-svg-logo')).click();
        browser.sleep(2000);
                 
        });


 });