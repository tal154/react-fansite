package learn.fansite.domain;

import learn.fansite.data.ForumRepository;
import learn.fansite.models.Forum;
import learn.fansite.domain.Validations.*;
import org.springframework.cglib.core.Local;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
public class ForumService {
    private final ForumRepository repository;
    public ForumService(ForumRepository repository){this.repository = repository;}

    public List<Forum> findAll(){return repository.findAll();}

    public Forum findById(int forumId){return repository.findById(forumId);}

    public Result<Forum> add(Forum forum){
        forum.setPostDate(LocalDate.now());
        Result<Forum> result = validate(forum);
        if(!result.isSuccess()){
            return result;
        }

        if(forum.getForumId() != 0){
            result.addMessage("forumId cannot be set for `add` operation", ResultType.INVALID);
            return result;
        }

        forum = repository.add(forum);
        result.setPayload(forum);
        return result;
    }

    public Result<Forum> update(Forum forum){
        Result<Forum> result = validate(forum);
        if(!result.isSuccess()){
            return result;
        }

        if(forum.getForumId() <= 0){
            result.addMessage("forumId must be set for `update` operation", ResultType.INVALID);
            return result;
        }

        if(!repository.update(forum)){
            String msg = String.format("forumId: %s, not found", forum.getForumId());
            result.addMessage(msg, ResultType.NOT_FOUND);
        }

        return result;
    }

    public boolean deleteById(int forumId){return repository.deleteById(forumId);}

    private Result<Forum> validate(Forum forum){
        Result<Forum> result = new Result<>();
        if(forum == null){
            result.addMessage("from cannot be null", ResultType.INVALID);
            return result;
        }

        if(Validations.isNullOrBlank(forum.getForumName())){
            result.addMessage("forumName(username) is required.", ResultType.INVALID);
        }

        if(Validations.isNullOrBlank(forum.getTitle())){
            result.addMessage("title is required.", ResultType.INVALID);
        }

        if(Validations.isNullOrBlank(forum.getPostContent())){
            result.addMessage("postContent is required.", ResultType.INVALID);
        }

        if(forum.getPostDate() == null){
            result.addMessage("postDate is required.", ResultType.INVALID);
        }
        /**
         * TODO: Validation conditions
         * - only need null check?
         * - using spring boot validation.
         * - string character length validation?
         */

        return result;
    }


}
