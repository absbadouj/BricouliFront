export class Devis {
public id: number;
constructor(

        public massage: string,
        public date: string,
        public heure: string,
        public adresse: string,
        public montant: number,
        public status: string
    ) {}
}
