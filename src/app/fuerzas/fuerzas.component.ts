import { Component, ChangeDetectorRef} from '@angular/core';

@Component
({
    selector: 'app-fuerzas',
    templateUrl: 'fuerzas.html',
    styleUrl: '../app.css'
})

export class Fuerzas 
{
    constructor(private ref: ChangeDetectorRef) {}
    Px = 0;
    Py = 0;
    N = 0;
    Pt = 0;
    Fr = 0;
    cr = 0;
    gri = 0;
    m = 0;
    g = 9.8;
    a = 0;
    Ft = 0;
    temp = 0;
    iniciado = false;

    Calcular(coeficiente_rozamiento: any, masa_objeto: any, grado_inclinacion: any)
    {
        if (coeficiente_rozamiento < 0 || coeficiente_rozamiento > 1)
        {
            alert("Lo siento, no es posible aplicar el coeficiente de rozamiento, los coeficientes de rozamientos solo son válidos desde el 0 hasta el 1");
        
        } else
        {
            this.iniciado = true;
            this.Pt = masa_objeto * this.g;
            this.N = this.Pt * Math.cos(grado_inclinacion * Math.PI / 180);
            this.Fr = coeficiente_rozamiento * this.N;
            this.Px = this.Pt * Math.sin(grado_inclinacion * Math.PI / 180);
            this.Py = this.Pt * Math.cos(grado_inclinacion * Math.PI / 180);
            this.gri = grado_inclinacion;
            this.cr = coeficiente_rozamiento;
            this.m = masa_objeto;
            this.Ft = this.Px - this.Fr;
            this.a = this.Ft / this.m;
            this.ref.markForCheck();
        }
    }
}