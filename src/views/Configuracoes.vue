<template>
    <section class="config-container">
        <h1 class="content-title">Configurações</h1>
        <div class="view-perfis">
            <TableView titulo="Perfis" :colunas="colunasPerfis" :dados="perfis" @adicionar="abrirFormulario"
                @editar="editarPerfil" />
        </div>
        <div class="view-usuarios">
            <TableView titulo="Usuários" :colunas="colunasUsuarios" :dados="usuarios" @adicionar="abrirFormulario"
                @editar="editarUsuario" />
        </div>
    </section>
</template>

<script>
import TableView from '@/components/TableView.vue';

export default {
    name: 'appConfiguracoes',
    components: {
        TableView
    },
    data() {
        return {
            colunasPerfis: [
                { titulo: 'Nome', campo: 'nome' },
                { titulo: 'Quantidade de Usuários', campo: 'quantidadeUsuarios' },
                { titulo: 'Permissões', campo: 'permissoes' },
            ],
            perfis: [
                {
                    id: 1,
                    nome: 'Admin',
                    quantidadeUsuarios: 1,
                    permissoes: 'Tudo',
                },
                {
                    id: 2,
                    nome: 'Desenvolvedor',
                    quantidadeUsuarios: 2,
                    permissoes: 'Downloads, Avaliações, Erros, Novas Funcionalidades',
                },
                {
                    id: 3,
                    nome: 'Recursos Humanos',
                    quantidadeUsuarios: 1,
                    permissoes: 'Avaliações',
                },
            ],
            colunasUsuarios: [
                { titulo: 'Nome', campo: 'nome' },
                { titulo: 'Email', campo: 'email' },
                { titulo: 'Perfil', campo: 'perfil' },
                { titulo: 'Status', campo: 'status' },
            ],
            usuarios: [
                {
                    id: 1,
                    nome: 'Antes Lab',
                    email: 'jante@pervid.com.br',
                    perfil: 'Admin',
                    status: 'ATIVO',
                },
                {
                    id: 2,
                    nome: 'Java Lucas',
                    email: 'java.lucas@curvid.com.br',
                    perfil: 'Desenvolvedor',
                    status: 'ATIVO',
                },
                {
                    id: 3,
                    nome: 'Citrixi Lopes',
                    email: 'citrixi.lepes@curvid.com.br',
                    perfil: 'Recursos Humanos',
                    status: 'ATIVO',
                },
            ],
        };
    },
    methods: {
        abrirFormulario() {
            alert('Adicionar novo perfil');
        },
        editarPerfil(perfil) {
            alert(`Editar perfil: ${perfil.nome}`);
        },
        editarUsuario(usuario) {
            alert(`Editar usuário: ${usuario.nome}`);
        },
    }
}
</script>

<style scoped>
.config-container {
    display: flex;
    flex-direction: column;
    background-color: #F8F8F8;
    padding: 20px;
}

.content-title {
    font-size: 32px;
    font-weight: bold;
    margin-bottom: 10px;
}

div {
    margin-bottom: 10px;
    font-size: 20px;
}
</style>