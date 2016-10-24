"use strict";
var Comment = (function () {
    function Comment(id, content, email, user_id, product_id, created, updated, status) {
        this.id = id;
        this.content = content;
        this.email = email;
        this.user_id = user_id;
        this.product_id = product_id;
        this.created = created;
        this.updated = updated;
        this.status = status;
    }
    return Comment;
}());
exports.Comment = Comment;
//# sourceMappingURL=comment.js.map