define([
    'jasmine',
    'streamhub-trending'],
function (jasmine, TrendingApp) {
    describe('streamhub-trending', function () {
        it('can be constructed with no options', function () {
            var app = new TrendingApp();
            expect(app instanceof TrendingApp).toBe(true);
        });
    }); 
});
