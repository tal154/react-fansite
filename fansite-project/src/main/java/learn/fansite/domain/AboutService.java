package learn.fansite.domain;

import learn.fansite.data.AboutRepository;
import learn.fansite.models.About;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AboutService {
    private final AboutRepository repository;

    public AboutService(AboutRepository repository) {
        this.repository = repository;
    }

    public List<About> findAll() {
        return repository.findAll();
    }

    public About findById(int aboutId) {
        return repository.findById(aboutId);
    }
}

