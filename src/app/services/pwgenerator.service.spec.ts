import {PwGeneratorService} from './pwgenerator.service';

fdescribe('PipesComponent', () => {
    let pwGenerator: PwGeneratorService;

    beforeEach(() => {
        pwGenerator = new PwGeneratorService();
    });

    it('stand alone test of a service', () => {
        const result = pwGenerator.generatePassword(true, false, false, 11);
        console.log('Result = ' + result);
        expect(result.length).toEqual(11);
    });
});
