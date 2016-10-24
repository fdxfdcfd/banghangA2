"use strict";
var Contact = (function () {
    function Contact(id, name, title, content, created, updated, user_updated, status) {
        this.id = id;
        this.name = name;
        this.title = title;
        this.content = content;
        this.created = created;
        this.updated = updated;
        this.created = created;
        this.status = status;
    }
    return Contact;
}());
exports.Contact = Contact;
//# sourceMappingURL=contact.js.map