export default {
    openapi: "3.2.0",
    info: {
        title: "Digite aqui um nome para a API",
        description: "Digite aqui uma breve descrição ou instruções de uso para a API",
        version: "1.0.0",
        termsOfService: "https://swagger.io/docs/specification/v3_0/basic-structure/",
        contact: {
            email: "email@email.com",
            name: "Documentação Swagger",
            url: "https://swagger.io/specification/"
        },
    },
    paths: {
        "/users/{id}": {
            get: {
                summary: "Usuário por ID",
                description: "Retorna os dados do usuário",
                tags: ["Usuários"],
                parameters: [{
                    in: "path",
                    name: "id",
                    description: "Id do usuário",
                    required: true,
                    schema: {
                        type: "integer"
                    }
                }],
                responses: {
                    200: {
                        description: "OK",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        id: {
                                            type: "integer"
                                        },
                                        name: {
                                            type: "string"
                                        },
                                        active: {
                                            type: "boolean"
                                        }
                                    },
                                    example: {
                                        id: 1,
                                        name: "Wesley",
                                        active: true
                                    }
                                }
                            }
                        }
                    },
                    404: {
                        description: "Not found",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        message: {
                                            type: "string"
                                        },
                                        cause: {
                                            type: "string"
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        },
        "/users": {
            post: {
                summary: "Cadastro de usuários",
                description: "Envie no corpo da requisição nome e data de nascimento para cadastrar um novo usuário",
                tags: ["Usuários"],
                requestBody: {
                    content: {
                        "application/json": {
                            schema: {
                                properties: {
                                    nome: {
                                        type: "string"
                                    },
                                    nascimento: {
                                        type: "string"
                                    }
                                },
                                example: {
                                    nome: "Wesley",
                                    nascimento: "1989-01-02"
                                }
                            }

                        }
                    },
                },
                responses: {
                    201: {
                        description: "Created",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        id: {
                                            type: "integer"
                                        },
                                        nome: {
                                            type: "string"
                                        },
                                        nascimento: {
                                            type: "string"
                                        }
                                    }

                                },
                            }
                        }
                    }
                }
            }
        }
    }, 
}