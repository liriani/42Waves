export const TRANSLATIONS = {
  pt: {
    title: "Libft Studio Full",
    subtitle: "Domina a tua primeira biblioteca C",
    functions: "Funcoes",
    makefile: "Makefile",
    guideTitle: "Manual do Desenvolvedor",
    guideDesc:
      "Seleciona uma funcao para estudar a sua anatomia e algoritmo. Ao marcar como concluida, o ficheiro correspondente e injetado no teu Makefile.",
    step1Title: "Algoritmo",
    step1Desc: "O fluxo de execucao logico.",
    step2Title: "Codificacao",
    step2Desc: "Escreve o codigo respeitando a Norme.",
    addMakefile: "Adicionar ao SRC",
    addedMakefile: "No Makefile",
    description: "Objetivo",
    usageTitle: "Anatomia & Contexto",
    stepByStep: "Implementacao Passo a Passo",
    close: "Fechar",
    statusReady: "PRONTO PARA SUBMETER",
    statusDev: "PROJETO EM CURSO",
    emptyLearned: "# Nenhuma funcao marcada ainda",
    nav: { libc: "Libc", additional: "Adicionais", bonus: "Bonus" },
    sections: {
      libc: "Fase 1: Funcoes da Biblioteca Standard",
      additional: "Fase 2: Funcoes de Utilidade Adicional",
      bonus: "Fase 3: Manipulacao de Listas Ligadas"
    }
  },
  en: {
    title: "Libft Studio Full",
    subtitle: "Master your first C library",
    functions: "Functions",
    makefile: "Makefile",
    guideTitle: "Developer Manual",
    guideDesc:
      "Select a function to study its anatomy and algorithm. Once marked as learned, the file is injected into your Makefile.",
    step1Title: "Algorithm",
    step1Desc: "The logical execution flow.",
    step2Title: "Coding",
    step2Desc: "Write code following the Norm.",
    addMakefile: "Add to SRC",
    addedMakefile: "In Makefile",
    description: "Objective",
    usageTitle: "Anatomy & Context",
    stepByStep: "Step-by-Step Implementation",
    close: "Close",
    statusReady: "READY TO SUBMIT",
    statusDev: "PROJECT IN PROGRESS",
    emptyLearned: "# No functions learned yet",
    nav: { libc: "Libc", additional: "Additional", bonus: "Bonus" },
    sections: {
      libc: "Phase 1: Standard Library Functions",
      additional: "Phase 2: Additional Utility Functions",
      bonus: "Phase 3: Linked List Manipulation"
    }
  },
  es: {
    title: "Libft Studio Full",
    subtitle: "Domina tu primera libreria C",
    functions: "Funciones",
    makefile: "Makefile",
    guideTitle: "Manual del Desarrollador",
    guideDesc:
      "Selecciona una funcion para estudiar su anatomia y algoritmo. Al marcarla, el archivo se inyecta en tu Makefile.",
    step1Title: "Algoritmo",
    step1Desc: "El flujo de ejecucion logico.",
    step2Title: "Codificacion",
    step2Desc: "Escribe el codigo respetando la Norma.",
    addMakefile: "Anadir al SRC",
    addedMakefile: "En Makefile",
    description: "Objetivo",
    usageTitle: "Anatomia y Contexto",
    stepByStep: "Implementacion Paso a Paso",
    close: "Cerrar",
    statusReady: "LISTO PARA ENTREGAR",
    statusDev: "PROYECTO EN CURSO",
    emptyLearned: "# Aun no hay funciones marcadas",
    nav: { libc: "Libc", additional: "Adicionales", bonus: "Bonus" },
    sections: {
      libc: "Fase 1: Funciones de la Biblioteca Estandar",
      additional: "Fase 2: Funciones de Utilidad Adicional",
      bonus: "Fase 3: Manipulacion de Listas Enlazadas"
    }
  }
};

export const LIBFT_DATA = {
  libc: [
    { name: "ft_isalpha", desc: { pt: "Verifica se e alfabetico.", en: "Checks for alpha.", es: "Verifica si es letra." }, usage: { pt: "Prototipo: int ft_isalpha(int c). Verifica ranges ASCII 65-90 e 97-122.", en: "Prototype: int ft_isalpha(int c). Checks ASCII ranges 65-90 and 97-122.", es: "Prototipo: int ft_isalpha(int c). Verifica rangos ASCII 65-90 y 97-122." }, step: { pt: "1. Recebe char como int.\n2. Compara com 'A'-'Z' e 'a'-'z'.\n3. Retorna 1 se verdadeiro.", en: "1. Receive char as int.\n2. Compare with 'A'-'Z' and 'a'-'z'.\n3. Return 1 if true.", es: "1. Recibe char como int.\n2. Compara con 'A'-'Z' y 'a'-'z'.\n3. Devuelve 1 si es true." } },
    { name: "ft_isdigit", desc: { pt: "Verifica se e digito.", en: "Checks for digit.", es: "Verifica si es digito." }, usage: { pt: "Verifica range 48-57. Usado para validacao de numeros.", en: "Checks 48-57 range. Used for number validation.", es: "Verifica rango 48-57. Usado para validar numeros." }, step: { pt: "1. Verifica se c >= '0' e c <= '9'.", en: "1. Check if c is between '0' and '9'.", es: "1. Verifica si c esta entre '0' y '9'." } },
    { name: "ft_isalnum", desc: { pt: "Alfanumerico.", en: "Alphanumeric.", es: "Alfanumerico." }, usage: { pt: "Combina ft_isalpha e ft_isdigit. Util em parsers.", en: "Combines ft_isalpha and ft_isdigit. Useful in parsers.", es: "Combina ft_isalpha y ft_isdigit. Util en parsers." }, step: { pt: "1. Retorna (ft_isalpha(c) || ft_isdigit(c)).", en: "1. Return (ft_isalpha(c) || ft_isdigit(c)).", es: "1. Devuelve (ft_isalpha(c) || ft_isdigit(c))." } },
    { name: "ft_isascii", desc: { pt: "Range ASCII.", en: "ASCII range.", es: "Rango ASCII." }, usage: { pt: "Verifica se cabe nos 7 bits (0-127).", en: "Checks if it fits in 7 bits (0-127).", es: "Verifica si cabe en 7 bits (0-127)." }, step: { pt: "1. Verifica se c >= 0 e c <= 127.", en: "1. Check if c is between 0 and 127.", es: "1. Verifica si c esta entre 0 y 127." } },
    { name: "ft_isprint", desc: { pt: "Imprimivel.", en: "Printable.", es: "Imprimible." }, usage: { pt: "Range 32-126. Exclui controles (ex: TAB, NL).", en: "Range 32-126. Excludes controls.", es: "Rango 32-126. Excluye controles." }, step: { pt: "1. Verifica se c >= 32 e c <= 126.", en: "1. Check if c is between 32 and 126.", es: "1. Verifica si c esta entre 32 y 126." } },
    { name: "ft_strlen", desc: { pt: "Tamanho string.", en: "String length.", es: "Largo cadena." }, usage: { pt: "Base para gestao de memoria e strings.", en: "Basis for memory and string management.", es: "Base para gestion de memoria y cadenas." }, step: { pt: "1. Itera s[i] ate encontrar '\\0'.\n2. Retorna contador.", en: "1. Iterate s[i] until '\\0'.\n2. Return counter.", es: "1. Itera s[i] hasta '\\0'.\n2. Devuelve contador." } },
    { name: "ft_memset", desc: { pt: "Preenche bytes.", en: "Fill bytes.", es: "Llena bytes." }, usage: { pt: "void *ft_memset(void *b, int c, size_t len).", en: "void *ft_memset(void *b, int c, size_t len).", es: "void *ft_memset(void *b, int c, size_t len)." }, step: { pt: "1. Cast b para unsigned char*.\n2. Loop len vezes setando c.", en: "1. Cast b to unsigned char*.\n2. Loop len times setting c.", es: "1. Cast b a unsigned char*.\n2. Bucle len veces asignando c." } },
    { name: "ft_bzero", desc: { pt: "Zera memoria.", en: "Zero memory.", es: "Cero en memoria." }, usage: { pt: "Antiquado, mas exigido. Usa memset(s, 0, n).", en: "Legacy but required. Uses memset(s, 0, n).", es: "Antiguo pero requerido. Usa memset(s, 0, n)." }, step: { pt: "1. ft_memset(s, 0, n).", en: "1. ft_memset(s, 0, n).", es: "1. ft_memset(s, 0, n)." } },
    { name: "ft_memcpy", desc: { pt: "Copia bytes.", en: "Copy bytes.", es: "Copia bytes." }, usage: { pt: "Rapido, mas perigoso se houver overlap.", en: "Fast but dangerous with overlap.", es: "Rapido pero peligroso con solape." }, step: { pt: "1. Cast pointers.\n2. Copia s[i] para d[i].", en: "1. Cast pointers.\n2. Copy s[i] to d[i].", es: "1. Cast pointers.\n2. Copia s[i] a d[i]." } },
    { name: "ft_memmove", desc: { pt: "Copia segura.", en: "Safe move.", es: "Mover seguro." }, usage: { pt: "Trata overlap verificando se dst > src.", en: "Handles overlap by checking if dst > src.", es: "Gestiona solape si dst > src." }, step: { pt: "1. Se overlap, copia de tras para frente.", en: "1. If overlap, copy backwards.", es: "1. Si solape, copia hacia atras." } },
    { name: "ft_strlcpy", desc: { pt: "Copia string.", en: "String copy.", es: "Copia cadena." }, usage: { pt: "Garante NULL-termination.", en: "Ensures NULL-termination.", es: "Garantiza fin en NULL." }, step: { pt: "1. Copia ate size-1.\n2. Adiciona \\0.", en: "1. Copy up to size-1.\n2. Add \\0.", es: "1. Copia hasta size-1.\n2. Anade \\0." } },
    { name: "ft_strlcat", desc: { pt: "Concatena.", en: "Concatenate.", es: "Concatena." }, usage: { pt: "Seguro contra overflow.", en: "Safe from overflow.", es: "Seguro ante overflow." }, step: { pt: "1. Acha fim de dst.\n2. Concatena src ate size-1.", en: "1. Find dst end.\n2. Concat src up to size-1.", es: "1. Busca fin de dst.\n2. Concatena src hasta size-1." } },
    { name: "ft_toupper", desc: { pt: "Maiuscula.", en: "Uppercase.", es: "Mayuscula." }, usage: { pt: "Subtrai 32 se a-z.", en: "Subtract 32 if a-z.", es: "Resta 32 si a-z." }, step: { pt: "1. if (c >= 'a' && c <= 'z') return c - 32.", en: "1. if (c >= 'a' && c <= 'z') return c - 32.", es: "1. if (c >= 'a' && c <= 'z') return c - 32." } },
    { name: "ft_tolower", desc: { pt: "Minuscula.", en: "Lowercase.", es: "Minuscula." }, usage: { pt: "Soma 32 se A-Z.", en: "Add 32 if A-Z.", es: "Suma 32 si A-Z." }, step: { pt: "1. if (c >= 'A' && c <= 'Z') return c + 32.", en: "1. if (c >= 'A' && c <= 'Z') return c + 32.", es: "1. if (c >= 'A' && c <= 'Z') return c + 32." } },
    { name: "ft_strchr", desc: { pt: "Busca char.", en: "Search char.", es: "Busca char." }, usage: { pt: "1a ocorrencia. Retorna ponteiro.", en: "1st occurrence. Returns pointer.", es: "1a ocurrencia. Devuelve puntero." }, step: { pt: "1. Itera ate achar c ou \\0.", en: "1. Iterate until c or \\0.", es: "1. Itera hasta c o \\0." } },
    { name: "ft_strrchr", desc: { pt: "Busca (rev).", en: "Search (rev).", es: "Busca (rev)." }, usage: { pt: "Ultima ocorrencia.", en: "Last occurrence.", es: "Ultima ocurrencia." }, step: { pt: "1. Acha fim, volta procurando c.", en: "1. Find end, search back for c.", es: "1. Busca fin, retrocede buscando c." } },
    { name: "ft_strncmp", desc: { pt: "Compara n.", en: "Compare n.", es: "Compara n." }, usage: { pt: "Seguro para comparacao parcial.", en: "Safe for partial comparison.", es: "Seguro para comparacion parcial." }, step: { pt: "1. Loop n vezes comparando s1 e s2.", en: "1. Loop n times comparing s1 and s2.", es: "1. Bucle n veces comparando s1 y s2." } },
    { name: "ft_memchr", desc: { pt: "Acha byte.", en: "Find byte.", es: "Busca byte." }, usage: { pt: "Busca em blocos binarios.", en: "Search in binary blocks.", es: "Busca en bloques binarios." }, step: { pt: "1. Cast p/ unsigned char e itera.", en: "1. Cast to unsigned char and iterate.", es: "1. Cast a unsigned char e itera." } },
    { name: "ft_memcmp", desc: { pt: "Compara mem.", en: "Compare mem.", es: "Compara mem." }, usage: { pt: "Comparacao binaria exata.", en: "Exact binary comparison.", es: "Comparacion binaria exacta." }, step: { pt: "1. Compara bytes e retorna diff.", en: "1. Compare bytes and return diff.", es: "1. Compara bytes y devuelve diff." } },
    { name: "ft_strnstr", desc: { pt: "Busca sub.", en: "Find sub.", es: "Busca sub." }, usage: { pt: "Limite len para busca.", en: "Search with len limit.", es: "Busca con limite len." }, step: { pt: "1. Acha agulha no palheiro.", en: "1. Find needle in haystack.", es: "1. Busca aguja en pajar." } },
    { name: "ft_atoi", desc: { pt: "String -> int.", en: "String -> int.", es: "Cadena -> int." }, usage: { pt: "Pula brancos e converte digitos.", en: "Skip whitespaces and convert digits.", es: "Salta blancos y convierte digitos." }, step: { pt: "1. Skip 9-13, 32.\n2. Handle +/-.\n3. Loop digits.", en: "1. Skip 9-13, 32.\n2. Handle +/-.\n3. Loop digits.", es: "1. Salta 9-13, 32.\n2. +/-.\n3. Bucle digitos." } },
    { name: "ft_calloc", desc: { pt: "Aloca/Limpa.", en: "Alloc/Clear.", es: "Reserva/Limpia." }, usage: { pt: "Evita lixo na memoria.", en: "Prevents memory trash.", es: "Evita basura en memoria." }, step: { pt: "1. Malloc.\n2. Bzero.", en: "1. Malloc.\n2. Bzero.", es: "1. Malloc.\n2. Bzero." } },
    { name: "ft_strdup", desc: { pt: "Duplica.", en: "Duplicate.", es: "Duplica." }, usage: { pt: "Cria copia dinamica.", en: "Creates dynamic copy.", es: "Crea copia dinamica." }, step: { pt: "1. Malloc strlen+1.\n2. strcpy.", en: "1. Malloc strlen+1.\n2. strcpy.", es: "1. Malloc strlen+1.\n2. strcpy." } }
  ],
  additional: [
    { name: "ft_substr", desc: { pt: "Fatia string.", en: "Slice string.", es: "Trozo cadena." }, usage: { pt: "Cria nova string desde start.", en: "New string from start.", es: "Nueva cadena desde start." }, step: { pt: "1. Malloc len+1.\n2. Copy de s[start].", en: "1. Malloc len+1.\n2. Copy from s[start].", es: "1. Malloc len+1.\n2. Copia s[start]." } },
    { name: "ft_strjoin", desc: { pt: "Junta 2.", en: "Join 2.", es: "Une 2." }, usage: { pt: "Concatena s1 e s2 num novo bloco.", en: "Concat s1 and s2 in new block.", es: "Une s1 y s2 en nuevo bloque." }, step: { pt: "1. Malloc sum_len + 1.\n2. Copy both.", en: "1. Malloc sum_len + 1.\n2. Copy both.", es: "1. Malloc sum_len + 1.\n2. Copia ambas." } },
    { name: "ft_strtrim", desc: { pt: "Limpa pontas.", en: "Trims ends.", es: "Limpia extremos." }, usage: { pt: "Remove chars de \"set\" do inicio/fim.", en: "Remove \"set\" chars from start/end.", es: "Quita \"set\" de inicio/fin." }, step: { pt: "1. Acha start e end validos.\n2. Substr.", en: "1. Find valid start and end.\n2. Substr.", es: "1. Busca inicio y fin.\n2. Substr." } },
    { name: "ft_split", desc: { pt: "Divide string.", en: "Split string.", es: "Divide cadena." }, usage: { pt: "Cria array (char **) por delimitador.", en: "Creates array by delimiter.", es: "Crea array por delimitador." }, step: { pt: "1. Conta palavras.\n2. Malloc array.\n3. Malloc cada word.", en: "1. Count words.\n2. Malloc array.\n3. Malloc each word.", es: "1. Cuenta palabras.\n2. Malloc array.\n3. Malloc cada palabra." } },
    { name: "ft_itoa", desc: { pt: "int -> string.", en: "int -> string.", es: "int -> cadena." }, usage: { pt: "Conversao numerica reversa.", en: "Reverse numeric conversion.", es: "Conversion numerica inversa." }, step: { pt: "1. Conta len.\n2. Malloc.\n3. Fill backwards.", en: "1. Count len.\n2. Malloc.\n3. Fill backwards.", es: "1. Cuenta len.\n2. Malloc.\n3. Rellena hacia atras." } },
    { name: "ft_strmapi", desc: { pt: "Map f.", en: "Map f.", es: "Map f." }, usage: { pt: "Gera nova string via f(i, c).", en: "New string via f(i, c).", es: "Nueva cadena via f(i, c)." }, step: { pt: "1. Malloc.\n2. Itera aplicando f.", en: "1. Malloc.\n2. Iterate applying f.", es: "1. Malloc.\n2. Itera aplicando f." } },
    { name: "ft_striteri", desc: { pt: "Iter f.", en: "Iter f.", es: "Iter f." }, usage: { pt: "Modifica in-place via f(i, &c).", en: "Modify in-place via f(i, &c).", es: "Modifica in-situ via f(i, &c)." }, step: { pt: "1. Itera original.\n2. f(i, &s[i]).", en: "1. Iterate original.\n2. f(i, &s[i]).", es: "1. Itera original.\n2. f(i, &s[i])." } },
    { name: "ft_putchar_fd", desc: { pt: "Escreve c.", en: "Write c.", es: "Escribe c." }, usage: { pt: "Saida basica via fd.", en: "Basic output via fd.", es: "Salida basica via fd." }, step: { pt: "1. write(fd, &c, 1).", en: "1. write(fd, &c, 1).", es: "1. write(fd, &c, 1)." } },
    { name: "ft_putstr_fd", desc: { pt: "Escreve s.", en: "Write s.", es: "Escribe s." }, usage: { pt: "Escreve string no fd.", en: "Write string to fd.", es: "Escribe cadena en fd." }, step: { pt: "1. write(fd, s, len).", en: "1. write(fd, s, len).", es: "1. write(fd, s, len)." } },
    { name: "ft_putendl_fd", desc: { pt: "s + \\n.", en: "s + \\n.", es: "s + \\n." }, usage: { pt: "Util para logs de erro.", en: "Useful for error logs.", es: "Util para logs de error." }, step: { pt: "1. putstr + putchar(\\n).", en: "1. putstr + putchar(\\n).", es: "1. putstr + putchar(\\n)." } },
    { name: "ft_putnbr_fd", desc: { pt: "Escreve n.", en: "Write n.", es: "Escribe n." }, usage: { pt: "Trata recursivamente.", en: "Handle recursively.", es: "Gestiona recursivo." }, step: { pt: "1. Divide e imprime digitos.", en: "1. Divide and print digits.", es: "1. Divide e imprime digitos." } }
  ],
  bonus: [
    { name: "ft_lstnew", desc: { pt: "Novo no.", en: "New node.", es: "Nuevo nodo." }, usage: { pt: "Cria base da lista.", en: "Creates list base.", es: "Crea base de lista." }, step: { pt: "1. Malloc t_list.\n2. Set content/next.", en: "1. Malloc t_list.\n2. Set content/next.", es: "1. Malloc t_list.\n2. Define content/next." } },
    { name: "ft_lstadd_front", desc: { pt: "Add topo.", en: "Add top.", es: "Add inicio." }, usage: { pt: "Pilha (LIFO).", en: "Stack (LIFO).", es: "Pila (LIFO)." }, step: { pt: "1. new->next = *lst.\n2. *lst = new.", en: "1. new->next = *lst.\n2. *lst = new.", es: "1. nuevo->next = *lst.\n2. *lst = nuevo." } },
    { name: "ft_lstsize", desc: { pt: "Conta.", en: "Count.", es: "Cuenta." }, usage: { pt: "Itera lista.", en: "Iter list.", es: "Iter lista." }, step: { pt: "1. Loop ate next=NULL.", en: "1. Loop until next=NULL.", es: "1. Bucle hasta next=NULL." } },
    { name: "ft_lstlast", desc: { pt: "Ultimo.", en: "Last.", es: "Ultimo." }, usage: { pt: "Acha cauda.", en: "Find tail.", es: "Busca cola." }, step: { pt: "1. Percorre ate fim.", en: "1. Traverse to end.", es: "1. Recorre al fin." } },
    { name: "ft_lstadd_back", desc: { pt: "Add fim.", en: "Add back.", es: "Add final." }, usage: { pt: "Fila (FIFO).", en: "Queue (FIFO).", es: "Cola (FIFO)." }, step: { pt: "1. Last->next = new.", en: "1. Last->next = new.", es: "1. Last->next = nuevo." } },
    { name: "ft_lstdelone", desc: { pt: "Deleta 1.", en: "Del 1.", es: "Borra 1." }, usage: { pt: "Usa f(content).", en: "Uses f(content).", es: "Usa f(content)." }, step: { pt: "1. del(content).\n2. free(node).", en: "1. del(content).\n2. free(node).", es: "1. del(content).\n2. free(nodo)." } },
    { name: "ft_lstclear", desc: { pt: "Limpa tudo.", en: "Clear all.", es: "Limpia todo." }, usage: { pt: "Esvazia lista.", en: "Empty list.", es: "Vacia lista." }, step: { pt: "1. lstdelone em todos.", en: "1. lstdelone on all.", es: "1. lstdelone en todos." } },
    { name: "ft_lstiter", desc: { pt: "Itera.", en: "Iterate.", es: "Itera." }, usage: { pt: "f em cada.", en: "f on each.", es: "f en cada." }, step: { pt: "1. Loop aplicando f.", en: "1. Loop applying f.", es: "1. Bucle aplicando f." } },
    { name: "ft_lstmap", desc: { pt: "Map.", en: "Map.", es: "Map." }, usage: { pt: "Nova lista.", en: "New list.", es: "Nueva lista." }, step: { pt: "1. New nodes via f.", en: "1. New nodes via f.", es: "1. Nuevos nodos via f." } }
  ]
};

export const LANGUAGE_OPTIONS = ["pt", "en", "es"];
export const CATEGORIES = Object.keys(LIBFT_DATA);

