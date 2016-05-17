export default function() {

  this.get('/tasks', function(db){
    return {
        data: db.tasks.map(attrs => (
          { type: 'tasks', id: attrs.id, attributes: attrs }
          ))
      };
  });
}
