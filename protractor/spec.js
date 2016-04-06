describe('TODO list', function() {
  it('should click on tabs', function() {

    browser.get('https://localhost/angular/task2.html');

    element.all(by.css('.nav-tabs li')).then(function(items) {
        items.forEach(function(item, i) {
            item.click();
            expect(element(by.css('.tab-content')).getText()).toEqual('Content of ' + item.getText());
        });
    });;
    /*element(by.css('.nav-tabs li:first-child')).click();
    element(by.css('.nav-tabs li:last-child')).click();*/

    expect(browser.getTitle()).toEqual('AngularJS Training');

  });
});