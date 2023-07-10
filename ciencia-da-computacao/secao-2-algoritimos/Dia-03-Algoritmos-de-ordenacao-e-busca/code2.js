function solution(queries) {
  const files = {};
  const result = [];

  for (let i = 0; i < queries.length; i++) {
      const [command, path, size] = queries[i];

      switch (command) {
          case 'ADD_FILE':
              if (files[path]) {
                  result.push('false');
              } else {
                  files[path] = { size };
                  result.push('true');
              }
              break;

          case 'GET_FILE_SIZE':
              if (files[path]) {
                  result.push(files[path].size);
              } else {
                  result.push('');
              }
              break;

          case 'DELETE_FILE':
              if (files[path]) {
                  result.push(files[path].size);
                  delete files[path];
              } else {
                  result.push('');
              }
              break;

          default:
              result.push('Invalid command');
              break;
      }
  }

  return result;
}