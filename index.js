function roundOfApplause (){
    return ("Catching on steady. kinda getting the hang of things now.;")
};
const receivesAFunction = (roundOfApplause) => roundOfApplause ();
const returnsANamedFunction = () => receivesAFunction;
const returnsAnAnonymousFunction = () => (()=> receivesAFunction());