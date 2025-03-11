
class Funcionario {
    #salario; // Encapsulamento (privado)

    constructor(nome, idade, salario) {
        this.nome = nome;
        this.idade = idade;
        this.#salario = salario; 
    }

    falar() {
        console.log(`${this.nome} está no hospital.`);
    }

    getSalario() { // Método para acessar o salário protegido
        return `O salário de ${this.nome} é confidencial.`;
    }
}

// Subclasses de Funcionários
class Medico extends Funcionario {
    falar() {
        console.log(`${this.nome} diz: "Vou atender os pacientes agora."`);
    }
}

class Enfermeiro extends Funcionario {
    falar() {
        console.log(`${this.nome} diz: "Preciso aplicar a medicação."`);
    }
}

class Farmaceutico extends Funcionario {
    falar() {
        console.log(`${this.nome} diz: "Os remédios precisam ser repostos."`);
    }
}

class Psicologo extends Funcionario {
    falar() {
        console.log(`${this.nome} diz: "Hora da terapia dos pacientes."`);
    }
}

class Terapeuta extends Funcionario {
    falar() {
        console.log(`${this.nome} diz: "A reabilitação é essencial para a recuperação."`);
    }
}

class Odontologista extends Funcionario {
    falar() {
        console.log(`${this.nome} diz: "Vamos cuidar da saúde bucal dos pacientes."`);
    }
}

class Biomedico extends Funcionario {
    falar() {
        console.log(`${this.nome} diz: "Preciso analisar as amostras coletadas."`);
    }
}

// Criando instâncias dos funcionários
const funcionarios = [
    new Medico("Yago", 26, 8000),
    new Enfermeiro("Rafael", 27, 5000),
    new Farmaceutico("Magalas", 46, 6000),
    new Psicologo("Alexandre", 27, 7000),
    new Terapeuta("Vitor", 30, 6500),
    new Odontologista("Lucas", 23, 9000),
    new Biomedico("Gabriel", 47, 7500)
];

// Testando os métodos falar e encapsulamento do salário
funcionarios.forEach(funcionario => {
    funcionario.falar();
    console.log(funcionario.getSalario());
});
