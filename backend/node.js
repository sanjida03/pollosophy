

class User {
    static num_users_for_id = 0;

    constructor(name, login_email, login_password) {
        this.name = name;
        this.user_id = User.num_users_for_id;

        User.num_users_for_id++;

        this.login_email = login_email;
        this.login_password = login_password;

    }
}


class Poll {
    static num_polls_for_id = 0;

    constructor(poll_question, poll_options) {
        this.poll_id = Poll.num_polls_for_id;

        Poll.num_polls_for_id++;
    
        this.poll_question = poll_question;
        this.poll_options = poll_options;
        this.poll_answers_count = Array.apply(null, Array(poll_options.length)).map(() => 0); 

        //this.poll_answer_by_user_id = [];

        this.comment_section = [];
    }

    userVote(user_id, answer) {
        this.poll_answers_count[answer]++;

        // we should implement it so that users cannot cast more than 1 vote
        // for later
    }

    userComment(comment) {
        this.comment_section[this.comment_section.length] = comment;
    }

    print() {
        console.log(this.poll_question)
        for(let i = 0; i<this.poll_options.length; i++) {
            console.log(this.poll_options[i] + "\t" + this.poll_answers_count[i]);
        }

        console.log("\n");

        for(let i = 0; i<this.comment_section.length; i++) {
            //console.log(this.comment_section)
            this.comment_section[i].print();
        }
    }
    
}


class Comment {
    constructor(comment_text, user_id){
        this.comment_text = comment_text;
        this.user_id = user_id;

        this.replies = [];
    }

    userReply(comment) {
        this.replies[this.replies.length] = comment;
    }

    print(start_str = "") {
        console.log(start_str + "User #" + this.user_id + " : \t" + this.comment_text);

        for(let i = 0; i<this.replies.length; i++) {
            this.replies[i].print(start_str + "\t");
        }
    }
}


const user1 = new User("John Doe", "john.doe@example.com", "1234");
const user2 = new User("Mary Jane", "mary.jane@example.com", "abcd");

const temp_poll = new Poll("do you like CMSC421?", ["Yes", "No"])

temp_poll.userVote(user1.user_id, 0); 
temp_poll.userVote(user2.user_id, 0); 

const comment = new Comment("I love CMSC421!", user1.user_id);
const comment2 = new Comment("No, I love CMSC421 MORE!!", user2.user_id);
const comment3 = new Comment("NOO, I love CMSC421 EVEN MORE!!", user1.user_id);

comment.userReply(comment2);
comment2.userReply(comment3);


temp_poll.userComment(comment);

//console.log(User.num_users_for_id);
//console.log(Poll.num_polls_for_id);

temp_poll.print()

console.log('sanity check');