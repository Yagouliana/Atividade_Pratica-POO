document.addEventListener("DOMContentLoaded", function () {
    class Funcionario {
        #salario; // Encapsulamento (privado)

        constructor(nome, idade, salario) {
            this.nome = nome;
            this.idade = idade;
            this.#salario = salario; 
        }

        falar() {
            return `${this.nome} está no hospital.`;
        }

        getSalario() { // Método para acessar o salário protegido
            return `O salário de ${this.nome} é confidencial.`;
        }
    }


    class Medica extends Funcionario {
        falar() {
            return `${this.nome} diz: "Vou atender os pacientes agora."`;
        }
    }

    class Enfermeiro extends Funcionario {
        falar() {
            return `${this.nome} diz: "Preciso aplicar a medicação."`;
        }
    }

    class Farmaceutico extends Funcionario {
        falar() {
            return `${this.nome} diz: "Os remédios precisam ser repostos."`;
        }
    }

    class Psicologo extends Funcionario {
        falar() {
            return `${this.nome} diz: "Hora da terapia dos pacientes."`;
        }
    }

    class Terapeuta extends Funcionario {
        falar() {
            return `${this.nome} diz: "A reabilitação é essencial para a recuperação."`;
        }
    }

    class Odontologista extends Funcionario {
        falar() {
            return `${this.nome} diz: "Vamos cuidar da saúde bucal dos pacientes."`;
        }
    }

    class Biomedico extends Funcionario {
        falar() {
            return `${this.nome} diz: "Preciso analisar as amostras coletadas."`;
        }
    }

    // Criando instâncias dos funcionários
    const funcionarios = [
        new Medica("Yago", 26, 8000),
        new Enfermeiro("Rafael", 27, 5000),
        new Farmaceutico("Magalas", 46, 6000),
        new Psicologo("Alexandre", 27, 7000),
        new Terapeuta("Vitor", 30, 6500),
        new Odontologista("Lucas", 23, 9000),
        new Biomedico("Gabriel", 47, 7500)
    ];

    // Exibindo funcionários na página
    const funcionariosDiv = document.getElementById("funcionarios");
    funcionarios.forEach(funcionario => {
        const p = document.createElement("p");
        p.textContent = funcionario.falar() + " | " + funcionario.getSalario();
        funcionariosDiv.appendChild(p);
    });
});
